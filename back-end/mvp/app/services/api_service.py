import requests
import json

from app.schemas.restaurant import RestaurantOutput
from app.services.secret import get_secret


class NaverApi(object):
    def __init__(self):
        self.naver_open_client_api = get_secret('naver_open_client_api')
        self.naver_open_client_secret = get_secret('naver_open_client_secret')
        self.naver_cloud_client_id = get_secret('naver_cloud_client_id')
        self.naver_cloud_client_secret = get_secret('naver_cloud_client_secret')
        self.v1_url = 'https://openapi.naver.com/v1/'

        self.headers = {
            'X-Naver-Client-Id': self.naver_open_client_api,
            'X-Naver-Client-Secret': self.naver_open_client_secret,
        }

    def get_local_search(self, query: str, **kwargs) -> dict:
        url = '{url}/search/local.json'.format(url=self.v1_url)

        payload = {
            'query': query,
        }

        for key, value in kwargs.items():
            payload[key] = value

        r = requests.get(url, headers=self.headers, params=payload)

        if r.status_code != 200:
            return {'Error': r.status_code}

        return r.json()


class KakaoApi(object):
    def __init__(self):
        self.kakao_api = get_secret('kakao_api')
        self.host = 'dapi.kakao.com'

        self.headers = {
            'Authorization': 'KakaoAK ${REST_API_KEY}'.format(self.kakao_api)
        }

    def get_local_serach(self, query: str, **kwargs):
        url = 'https://{kakao_api}/v2/local/search/keyword.json'.format(kakao_api=self.kakao_api)
        payload = {
            'query': query,
        }

        for key, value in kwargs.items():
            payload[key] = value

        r = requests.get(url, headers=self.headers, params=payload)

        if r.status_code != 200:
            return {'Error': r.status_code}

        return r.json()


def batch_migration_restaurant_database(restaurant_name: str, restaurant_data: RestaurantOutput):
    """
    배치성 코드를 일급함수로 구현 한 뒤에 API 호출을 진행한다.
    """

    pass





