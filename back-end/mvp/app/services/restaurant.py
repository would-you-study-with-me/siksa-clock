import logging
import random
from time import strftime, localtime, time

logging.basicConfig(level=logging.INFO)

async def calc_congestion(remaining_seats: int = 24) -> float:
    """
    혼잡도 계산 method
    """
    eat_hour = int(strftime('%I', localtime(time())))
    eat_minute = strftime('%M', localtime(time()))

    logging.info('{} : {}'.format(eat_hour, eat_minute))

    if 11 < eat_hour < 13:
        logging.info('점심')
        waiting_people = random.randrange(
            remaining_seats - 15, remaining_seats + 15
        )
    elif 17 < eat_hour < 19:
        logging.info('저녁')
        waiting_people = random.randrange(
            remaining_seats - 15, remaining_seats + 15
        )
    else:
        logging.info('그 외의 다른 시간')
        waiting_people = random.randrange(
            remaining_seats - 7, remaining_seats + 7
        )

    congestion = (waiting_people / remaining_seats) * 100
    return congestion
