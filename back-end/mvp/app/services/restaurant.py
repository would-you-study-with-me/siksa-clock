import logging
import random
from time import strftime, localtime, time

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
        eat_hour = int(strftime('%I', localtime(time())))
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

