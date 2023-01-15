import logging
from typing import List

from sqlalchemy import select, func

from app.config.database import get_session
from app.models.restaurant import Restaurant, OpeningTime
from app.schemas.restaurant import InputRestaurant, OutputRestaurant, InputRestaurants
from app.services.restaurant import RestaurantService

logging.basicConfig(level=logging.INFO)

async def get_restaurant(restaurant_input_data: InputRestaurant) -> OutputRestaurant:
    sql = select(Restaurant, OpeningTime).join(OpeningTime, Restaurant.restaurant_id == OpeningTime.restaurant_id) \
        .where(Restaurant.restaurant_id == restaurant_input_data.restaurant_id)

    async with get_session() as s:
        restaurant_data = (await s.execute(sql)).scalars().unique().first()


    restaurant_model_service = RestaurantService()
    restaurant_model_service.dhmm_model(remaining_seats=restaurant_data.restaurant_count_seats)

    logging.info("restaurant congestion classification : {}".format(restaurant_model_service.congestion_classification))
    logging.info("restaurant congestion : {}".format(restaurant_model_service.congestion))
    logging.info("restaurant waiting people : {}".format(restaurant_model_service.waiting_people))

    restaurant_image = await restaurant_model_service.input_restaurant_image_data(
        restaurant_id=restaurant_data.restaurant_id,
        restaurant_name=restaurant_data.restaurant_name,
        restaurant_image=restaurant_data.restaurant_image
    )
    restaurant_menu = await restaurant_model_service.input_restuarant_menu_data(
        restaurant_id=restaurant_data.restaurant_id,
        restaurant_name=restaurant_data.restaurant_name,
        restaurant_menu=restaurant_data.restaurant_menu
    )

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
        restaurant_opening_time_days=restaurant_data.opening_time[0].restaurant_opening_time_days,
        restaurant_opening_time=restaurant_data.opening_time[0].restaurant_opening_time,
        restaurant_break_time_days=restaurant_data.opening_time[0].restaurant_break_time_days,
        restaurant_break_time=restaurant_data.opening_time[0].restaurant_break_time,
        opening_time_created_at=restaurant_data.opening_time[0].opening_time_created_at,
        opening_time_updated_at=restaurant_data.opening_time[0].opening_time_updated_at,
        restaurant_congestion=restaurant_model_service.congestion_classification,
        restaurant_waiting_people=restaurant_model_service.waiting_people,
        restaurant_image=restaurant_image,
        restaurant_menu=restaurant_menu
    )

    return restaurant_data


async def get_restaurants(restaurants_input_data: InputRestaurants) -> List[OutputRestaurant]:

    # x, y 값이 없는 경우로
    if (restaurants_input_data.x is not None) and (restaurants_input_data.y is not None):
        sql = select(Restaurant)\
            .join(OpeningTime, Restaurant.restaurant_id == OpeningTime.restaurant_id)\
            .where(Restaurant.restaurant_address.like('%%{}%%'.format(restaurants_input_data.query)))\
            .order_by(func.st_distance_sphere(func.point(restaurants_input_data.x, restaurants_input_data.y),
                                             func.point(Restaurant.restaurant_x, Restaurant.restaurant_y)))\
            .limit(restaurants_input_data.limit).offset(restaurants_input_data.skip)
    else:
        sql = select(Restaurant, OpeningTime).join(OpeningTime, Restaurant.restaurant_id == OpeningTime.restaurant_id) \
            .where(Restaurant.restaurant_address.like('%%{}%%'.format(restaurants_input_data.query))) \
            .limit(restaurants_input_data.limit).offset(restaurants_input_data.skip)

    logging.info('Restaurants SQL : {}'.format(sql))

    async with get_session() as s:
        restaurant_db_datas = (await s.execute(sql)).scalars().unique().all()

    # 레스토랑 DHMM 모델 작동
    restaurant_model_service = RestaurantService()

    output_restaurant_list = []

    for restaurant in restaurant_db_datas:
        restaurant_model_service.dhmm_model(remaining_seats=restaurant.restaurant_count_seats)

        restaurant_image = await restaurant_model_service.input_restaurant_image_data(
            restaurant_id=restaurant.restaurant_id,
            restaurant_name=restaurant.restaurant_name,
            restaurant_image=restaurant.restaurant_image
        )
        restaurant_menu = await restaurant_model_service.input_restuarant_menu_data(
            restaurant_id=restaurant.restaurant_id,
            restaurant_name=restaurant.restaurant_name,
            restaurant_menu=restaurant.restaurant_menu
        )

        output_restaurant_data = OutputRestaurant(
            restaurant_id=restaurant.restaurant_id,
            restaurant_name=restaurant.restaurant_name,
            restaurant_rate=restaurant.restaurant_rate,
            restaurant_category=restaurant.restaurant_category,
            restaurant_count_seats=restaurant.restaurant_count_seats,
            restaurant_x=restaurant.restaurant_x,
            restaurant_y=restaurant.restaurant_y,
            restaurant_address=restaurant.restaurant_address,
            restaurant_description=restaurant.restaurant_description,
            restaurant_contact=restaurant.restaurant_contact,
            restaurant_created_at=restaurant.restaurant_created_at,
            restaurant_updated_at=restaurant.restaurant_updated_at,
            restaurant_opening_time_days=restaurant.opening_time[0].restaurant_opening_time_days,
            restaurant_opening_time=restaurant.opening_time[0].restaurant_opening_time,
            restaurant_break_time_days=restaurant.opening_time[0].restaurant_break_time_days,
            restaurant_break_time=restaurant.opening_time[0].restaurant_break_time,
            opening_time_created_at=restaurant.opening_time[0].opening_time_created_at,
            opening_time_updated_at=restaurant.opening_time[0].opening_time_updated_at,
            restaurant_congestion=restaurant_model_service.congestion_classification,
            restaurant_waiting_people=restaurant_model_service.waiting_people,
            restaurant_image=restaurant_image,
            restaurant_menu=restaurant_menu
        )
        output_restaurant_list.append(output_restaurant_data)

    return output_restaurant_list