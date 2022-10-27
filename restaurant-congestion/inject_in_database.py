from datetime import datetime
import json
import os
import random
import uuid

import pandas as pd
from sqlalchemy import create_engine


class SecretFile(object):
    secret_json_file = os.path.join('./', 'secret.json')

    def __init__(self):
        self.secret = None
        with open(self.secret_json_file, 'r') as secret_json_file:
            self.secret = json.load(secret_json_file)

    def get_secret(self, setting):
        try:
            return self.secret[setting]
        except KeyError:
            print('import errer')


def query(user: str, password: str, host: str, port: int, db_name: str, query: str):
    engine = create_engine(
        "mysql://{user}:{password}@{host}:{port}/{db_name}".format(
            user=user, password=password, host=host, port=port, db_name=db_name),
        echo=True
    )

    conn = engine.connect()
    result = conn.execute(query)
    return result


def change_restaurants_data():
    data = pd.read_csv('data/restaurant_data.csv')


    with open('data.sql', 'w', encoding='utf8') as f:
        for i in data.index:
            value = data.loc[i, :]

            opening_time_id = uuid.uuid4()

            query = """
            INSERT INTO restaurant (restaurant_id, restaurant_name, restaurant_rate, restaurant_count_seats,
             restaurant_x, restaurant_y, restaurant_address, restaurant_created_at, restaurant_updated_at)
            VALUES ('{restaurant_id}', '{restaurant_name}', {restaurant_rate}, {restaurant_count_seats},
             {restaurant_x}, {restaurant_y}, '{restaurant_address}', '{restaurant_created_at}', '{restaurant_updated_at}');
            """.format(
                restaurant_id=uuid.uuid4(),
                restaurant_name=str(value['사업장명']).replace("'", ""),
                restaurant_rate=random.randrange(0, 6),
                restaurant_count_seats=round(int(value['식사가능인원'])),
                restaurant_x=float(value['좌표정보_x']),
                restaurant_y=float(value['좌표정보_y']),
                restaurant_address=str(value['도로명전체주소']).replace("'", ""),
                restaurant_created_at=datetime.now(),
                restaurant_updated_at=datetime.now(),
            )
            print(query)
            f.write('{}\n'.format(query))



def opening_time_migration(restaurant_id: uuid.UUID):
    query = """
        INSERT INTO opening_time (opening_time_id, restaurant_id, opening_time_created_at, opening_time_updated_at)
        VALUES ('{opening_time_id}', '{restaurant_id}', '{opening_time_created_at}','{opening_time_updated_at}');
    """.format(
        opening_time_id=uuid.uuid4(),
        restaurant_id=restaurant_id,
        opening_time_created_at=datetime.now(),
        opening_time_updated_at=datetime.now(),
    )
    return query

def opening_data():
    secret = SecretFile()

    sql = """
       SELECT * FROM restaurant
    """

    restaurants_data = query(
       user=secret.get_secret('database_user'),
       password=secret.get_secret('database_password'),
       host=secret.get_secret('database_host'),
       port=secret.get_secret('database_port'),
       db_name=secret.get_secret('database_name'),
       query=sql
    )

    with open('injection.sql', 'w') as f:
       for data in restaurants_data:
           f.write('{} \n'.format(opening_time_migration(data['restaurant_id'])))


def fill_nan_data():
    restaurant_data = pd.read_csv('data/restaurant_data.csv')

    restaurant_data = restaurant_data.fillna(0)

    restaurant_data.to_csv('restaurant_data.csv', index_label=False)


if __name__ == '__main__':
    # change_restaurants_data()
    opening_data()