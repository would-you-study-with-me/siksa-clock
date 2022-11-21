import logging

import requests
import json

from pydantic import Json

from app.services.secret import get_secret


logging.basicConfig(level=logging.INFO)


class NaverApi(object):
    def __init__(self):
        self.naver_open_client_api = get_secret('naver_open_client_api')
        self.naver_open_client_secret = get_secret('naver_open_client_secret')
        self.v1_url = 'https://openapi.naver.com/v1/'

        self.headers = {
            'X-Naver-Client-Id': self.naver_open_client_api,
            'X-Naver-Client-Secret': self.naver_open_client_secret,
        }


    async def image_search(
            self,
            query: str,
            display: int = None,
            start: int = None,
            sort: str = None,
            filter: str = None
    ):
        url = "https://openapi.naver.com/v1/search/image"

        payload = {
            "query": query,
            "display": display,
            "start": start,
            "sort": sort,
            "filter": filter
        }

        r = requests.get(url, params=payload, headers=self.headers)

        logging.info('naver api image search status code : {}'.format(r.status_code))
        logging.info('naver api image search json : {}'.format(r.json()))

        return r


class NcloudApi(object):
    def __init__(self):
        self.ncloud_client_id = get_secret('ncloud_client_id')
        self.ncloud_client_secret = get_secret('ncloud_client_secret')

        self.header = {
            'X-NCP-APIGW-API-KEY-ID': self.ncloud_client_id,
            'X-NCP-APIGW-API-KEY': self.ncloud_client_secret
        }

    async def geocoding(
            self,
            query: str,
            coordinate: str = None,
            filter: str = None,
            page: int = None,
            count: int = None
    ):
        url = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode'

        payload = {
            'query': query,
            'coordinate': coordinate,
            'filter': filter,
            'page': page,
            'count': count,
        }

        r = requests.get(url, headers=self.header, params=payload)

        logging.info('ncloud geocoding url : {}'.format(r.url))
        logging.info('ncloud geocoding status code : {}'.format(r.status_code))
        logging.info('ncloud geocoding : \n {}'.format(r.json()))

        return r

    async def reverse_geocoding(
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

        r = requests.get(url, headers=self.header, params=payload)

        logging.info('ncloud reverse geocoding url : {}'.format(r.url))
        logging.info('ncloud reverse geocoding status code : {}'.format(r.status_code))
        logging.info('ncloud reverse geocoding : {}'.format(r.json()))

        return r



class KakaoApi(object):
    def __init__(self):
        self.kakao_api = get_secret('kakao_api')

        self.headers = {
            'Authorization': 'KakaoAK {REST_API_KEY}'.format(REST_API_KEY=self.kakao_api)
        }

    async def coord_to_address(self, x: float, y: float, input_coord: str = 'WGS84'):
        url = 'https://dapi.kakao.com/v2/local/geo/coord2address.json'

        payload = {
            'x': x,
            'y': y,
            'input_coord': input_coord
        }

        r = requests.get(url, headers=self.headers, params=payload)

        logging.info('(kakao api) coord to address : {}'.format(r.url))
        logging.info('status code : {}'.format(r.status_code))

        return r

    def coord_to_regioncode(
            self,
            x: float,
            y: float,
            input_coord: str = 'WGS84',
            output_coord: str = 'WGS84'
    ) -> Json:
        url = 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json'

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
    def trans_coord(

            self,
            x: float,
            y: float,
            input_coord: str = 'TM',
            output_coord: str = 'WGS84'
    ):
        url = 'https://dapi.kakao.com/v2/local/geo/transcoord.json'

        payload = {
            'x': x,
            'y': y,
            'input_coord': input_coord,
            'output_coord': output_coord
        }

        r = requests.get(url, headers=self.headers, params=payload)

        logging.info('kakao api trans coord url : {}'.format(r.url))
        logging.info('kakao api trans_coord status code : {}'.format(r.status_code))
        logging.info('kakao api trans_coord : {}'.format(r.json()))

        return r