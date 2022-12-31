import logging
import random
from time import strftime, localtime, time
from uuid import UUID

from pydantic import Json
from sqlalchemy import update

from app.config.database import get_session
from app.models.restaurant import Restaurant
from app.services.api_service import NaverApi

logging.basicConfig(level=logging.INFO)

class RestaurantService:
    def __init__(self):
        self.congestion = None
        self.waiting_people = None
        self.congestion_classification = None

    def calc_congestion(self, remaining_seats: int = 24) -> dict:
        """
        혼잡도 계산
        """
        eat_hour = int(localtime(time()).tm_hour)
        eat_minute = strftime('%M', localtime(time()))

        logging.info('혼잡도 계산 시간 = {}:{}'.format(eat_hour, eat_minute))

        if 10 < eat_hour < 14:
            logging.info('점심시간')
            self.waiting_people = random.randrange(
                remaining_seats - 15, remaining_seats + 15
            )
        elif 16 < eat_hour < 20:
            logging.info('저녁시간')
            self.waiting_people = random.randrange(
                remaining_seats - 15, remaining_seats + 15
            )
        else:
            logging.info('그 외의 다른 시간')
            self.waiting_people = random.randrange(
                remaining_seats - 7, remaining_seats + 7
            )

        self.congestion = (self.waiting_people / remaining_seats) * 100
        return {'congestion': self.congestion, 'waiting_people': self.waiting_people}


    def dhmm_model(self, remaining_seats: int = 24) -> None:
        """
        DHMM Model 혼잡도 분류 모델
        """

        congestion_data = self.calc_congestion(remaining_seats=remaining_seats)
        congestion = congestion_data['congestion']
        waiting_people = congestion_data['waiting_people']

        if congestion <= 80:
            self.congestion_classification = '원활'
        elif 80 < congestion < 120:
            self.congestion_classification = '보통'
        elif congestion >= 120:
            self.congestion_classification = '혼잡'
        elif waiting_people >= 10:
            self.congestion_classification = '혼잡'


    async def input_restaurant_image_data(
            self,
            restaurant_id: UUID,
            restaurant_name: str,
            restaurant_image: str = None
    ) -> Json:
        logging.info("음식점 이미지 데이터 확인 및 적재")

        if not restaurant_image:
            logging.info("{} 음식점 이미지 데이터가 없음!".format(restaurant_name))
            naver_api = NaverApi()
            image_data = await naver_api.image_search(query=restaurant_name)

            sql = update(Restaurant)\
                .where(Restaurant.restaurant_id == restaurant_id)\
                .values(restaurant_image=image_data.json())

            async with get_session() as s:
                await s.execute(sql)
                await s.commit()

            return image_data.json()
        else:
            logging.info("{} 음식점 이미지 데이터가 있음!".format(restaurant_name))
            return restaurant_image

    async def input_restuarant_menu_data(
            self,
            restaurant_id: UUID,
            restaurant_name: str,
            restaurant_menu: str
    ) -> Json:
        logging.info("음식점 메뉴판 데이터 확인 및 적재")

        # 데이터 값 있는지 확인
        if not restaurant_menu:
            logging.info("{} 음식점 메뉴판 데이터가 없음!".format(restaurant_name))
            naver_api = NaverApi()
            menu_data = await naver_api.image_search(query="{}메뉴".format(restaurant_name))

            sql = update(Restaurant) \
                .where(Restaurant.restaurant_id == restaurant_id) \
                .values(restaurant_menu=menu_data.json())

            async with get_session() as s:
                await s.execute(sql)
                await s.commit()

            return menu_data.json()
        else:
            logging.info("{} 음식점 이미지 데이터 있음!".format(restaurant_name))
            return restaurant_menu
