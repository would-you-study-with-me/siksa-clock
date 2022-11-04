import logging
from uuid import UUID

from sqlalchemy import delete, select, update

from app.config.database import get_session
from app.models.restaurant import Restaurant, OpeningTime
from app.schemas.restaurant import InputRestaurant, OutputRestaurant
from app.services.restaurant import RestaurantService

logging.basicConfig(level=logging.INFO)

async def get_restaurant(restaurant_input_data: InputRestaurant) -> OutputRestaurant:

    async with get_session() as s:
        sql = select(Restaurant, OpeningTime).join(OpeningTime, Restaurant.restaurant_id == OpeningTime.restaurant_id)\
            .where(Restaurant.restaurant_id == restaurant_input_data.restaurant_id)
        restaurant_data = (await s.execute(sql)).scalars().unique().one()

        sql = select(OpeningTime).where(OpeningTime.restaurant_id == restaurant_input_data.restaurant_id)
        opening_time_data = (await s.execute(sql)).scalars().unique().one()

    logging.info("input data : {}".format(restaurant_input_data))
    logging.info("db_restaurant : {}".format(restaurant_data.restaurant_id))
    logging.info("opening time db : {}".format(opening_time_data.restaurant_id))

    # SQL Join Table로 가져오기 -> subquery로 하는 예제가 있던데 확인해보기

    restaurant_model_service = RestaurantService()
    restaurant_model_service.dhmm_model(remaining_seats=restaurant_data.restaurant_count_seats)

    logging.info("restaurant congestion classification : {}".format(restaurant_model_service.congestion_classification))
    logging.info("restaurant congestion : {}".format(restaurant_model_service.congestion))
    logging.info("restaurant waiting people : {}".format(restaurant_model_service.waiting_people))

    restaurant_data = OutputRestaurant(
        restaurant_id=restaurant_data.restaurant_id,
        restaurant_name=restaurant_data.restaurant_name,
        restaurant_rate=restaurant_data.restaurant_rate,
        restaurant_category=restaurant_data.restaurant_category,
        restaurant_count_seats=restaurant_data.restaurant_count_seats,
        restaurant_x=restaurant_data.restaurant_x,
        restaurant_y=restaurant_data.restaurant_y,
        restaurant_address=restaurant_data.restaurant_address,
        restaurant_description=restaurant_data.restaurant_description,
        restaurant_contact=restaurant_data.restaurant_contact,
        restaurant_created_at=restaurant_data.restaurant_created_at,
        restaurant_updated_at=restaurant_data.restaurant_updated_at,
        restaurant_opening_time_days=opening_time_data.restaurant_opening_time_days,
        restaurant_opening_time=opening_time_data.restaurant_opening_time,
        restaurant_break_time_days=opening_time_data.restaurant_break_time_days,
        restaurant_break_time=opening_time_data.restaurant_break_time,
        opening_time_created_at=opening_time_data.opening_time_created_at,
        opening_time_updated_at=opening_time_data.opening_time_updated_at,
        restaurant_congestion=restaurant_model_service.congestion_classification,
        restaurant_waiting_people=restaurant_model_service.waiting_people
    )

    return restaurant_data
