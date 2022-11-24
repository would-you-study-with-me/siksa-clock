import numpy as np
import pandas as pd
import pyproj

from inject_in_database import SecretFile, query


def get_restaurants_data(secret: SecretFile):


    query_sql = """
        SELECT restaurant_id, restaurant_x, restaurant_y
        FROM restaurant
    """

    restaurants_db_data = query(
        user=secret.get_secret('database_user'),
        password=secret.get_secret('database_password'),
        host=secret.get_secret('database_host'),
        port=secret.get_secret('database_port'),
        db_name=secret.get_secret('database_name'),
        query=query_sql
    )

    return restaurants_db_data


def update_query(restaurnat_df):
    
    with open("update.sql", "w", encoding="utf8") as f:
        for i in restaurants_df.index:
            value = restaurants_df.loc[i, :]

            query = """
                UPDATE restaurant
                SET restaurant_x = '{x}', restaurant_y = '{y}'
                WHERE restaurant_id = '{id}';

            """.format(
                x=value['restaurant_x'],
                y=value['restaurant_y'],
                id=value['restaurant_id'],
            )

            f.write("{}".format(query))
            print(query)


    

if __name__ == '__main__':
    # secret = SecretFile()
    #
    # restaurants_data = get_restaurants_data(secret=secret)
    #
    # print("데이터베이스 데이터 가져오기 완료")
    #
    # # pandas data type 가공하기
    # restaurants_df = pd.DataFrame(columns=["restaurant_id", "restaurant_x", "restaurant_y"])
    # columns = ["restaurant_id", "restaurant_x", "restaurant_y"]
    #
    # i = 0
    # for data in restaurants_data:
    #     restaurants_df.loc[i] = [data.restaurant_id, data.restaurant_x, data.restaurant_y]
    #     print(restaurants_df.iloc[i])
    #     i = i + 1
    #
    # print(restaurants_df.head())
    # restaurants_df.to_csv('rest_df.csv', index_label=False)

    restaurants_df = pd.read_csv('rest_df.csv', header=0)
    print(restaurants_df.head())

    # numpy array 좌표계 변환
    p1 = pyproj.CRS("epsg:2097")
    p2 = pyproj.CRS("epsg:4326")


    print("좌표계 변환 준비")

    coord = np.array(restaurants_df.iloc[:, 1:])

    print(coord)

    fx, fy = pyproj.transformer.transform(p1, p2, coord[:, 1], coord[:, 0])

    print("fx, fy 변환 완료")

    data = np.dstack([fx, fy])[0]

    print("np dstack data : {}".format(data))
    
    restaurants_df['restaurant_x'] = data[:, 1]
    restaurants_df['restaurant_y'] = data[:, 0]

    print(restaurants_df.head())

    update_query(restaurnat_df=restaurants_df)
    print("끝")
