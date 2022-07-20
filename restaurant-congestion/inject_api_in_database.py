import requests

from inject_in_database import SecretFile, query


def get_restaurants_data(secret: SecretFile):

    query_sql = """
        SELECT *
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


def get_kakao_api(search: str, x: str = None, y: str = None, radius: int = 10, secret: SecretFile = None):
    kakao = secret.get_secret('kakao_api')
    
    host = 'dapi.kakao.com'

    url = '/v2/local/search/keyword.${query_param}{x}{y}{radius}'.format(
        query_param='query={}'.format(search),
        x='&x={}'.format(x),
        y='&y={}'.format(y),
        radius='&radius={}'.format(radius)
    )
    
    headers = {'Authorization': 'KakaoAK {}'.format(kakao)}

    r = requests.get('{host}{url}}'.format(host, url))
    print('code')    

    return r
    
   


if __name__ == '__main__':
    # secret = SecretFile()

    # restaurants_data = get_restaurants_data(secret=secret)

    


