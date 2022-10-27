import logging

import requests
import json

from pydantic import Json

from app.schemas.restaurant import RestaurantOutput
from app.services.secret import get_secret


logging.basicConfig(level=logging.DEBUG)


class NaverApi(object):
    def __init__(self):
        self.naver_open_client_api = get_secret('naver_open_client_api')
        self.naver_open_client_secret = get_secret('naver_open_client_secret')
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


class NcloudApi(object):
    def __init__(self):
        self.ncloud_client_id = get_secret('ncloud_client_id')
        self.ncloud_client_secret = get_secret('ncloud_client_secret')

        self.header = {
            'X-NCP-APIGW-API-KEY-ID': self.ncloud_client_id,
            'X-NCP-APIGW-API-KEY': self.ncloud_client_secret
        }

    def geocoding(self, query: str, coordinate: str = None):
        url = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode'

        payload = {
            'query': query,
            'coordinate': coordinate
        }

        r = requests.get(url, headers=self.header, params=payload)

        logging.info('ncloud geocoding url : {}'.format(r.url))
        logging.info('ncloud geocoding status code : {}'.format(r.status_code))

        return r

    def reverse_geocoding(
            self,
            x: float,
            y: float,
            sourcecrs: str = 'epsg:4326',
            targetcrs: str = 'epsg:4326',
            orders: str = 'legalcode,admcode,roadaddr',
            output: str = 'json'
    ):
        url = 'https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc'

        payload = {
            'coords':'{},{}'.format(x, y),
            'sourcecrs':sourcecrs,
            'targetcrs':targetcrs,
            'orders':orders,
            'output':output,

        }


class KakaoApi(object):
    def __init__(self):
        self.kakao_api = get_secret('kakao_api')
        self.host = 'dapi.kakao.com'

        self.headers = {
            'Authorization': 'KakaoAK {REST_API_KEY}'.format(REST_API_KEY=self.kakao_api)
        }

    def coord_to_address(self, x: float, y: float, input_coord: str = 'WGS84'):
        url = 'https://{host}/v2/local/geo/coord2address.json'.format(host=self.host)

        payload = {
            'x': x,
            'y': y,
            'input_coord': input_coord
        }

        r = requests.get(url, headers=self.headers, params=payload)

        logging.info('(kakao api) coord to address : {}'.format(r.url))
        logging.info('status code : {}'.format(r.status_code))

        return r

    def coord_to_regioncode(self, x: float, y: float, input_coord: str = 'WGS84', output_coord: str = 'WGS84') -> Json:
        url = 'https://{host}/v2/local/geo/coord2regioncode.json'.format(host=self.host)

        payload = {
            'x': x,
            'y': y,
            'input_coord': input_coord,
            'output_coord': output_coord,
        }

        r = requests.get(url, headers=self.headers, params=payload)

        logging.info('(kakao api) coord to regioncode : {}'.format(r.url))
        logging.info('status code : {}'.format(r.status_code))

        return r


if __name__ == '__main__':
    kakao_api = KakaoApi()
    x, y = 37.5303, 126.9969
    print(kakao_api.coord_to_address(x=x, y=y).json())