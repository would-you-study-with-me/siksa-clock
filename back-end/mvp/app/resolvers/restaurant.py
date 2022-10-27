import typing
from uuid import UUID

from sqlalchemy import delete, select, update

from app.config.database import get_session
from app.models.restaurant import Restaurant, OpeningTime
from app.scalars.restaurant import RestaurantAll
from app.services.restaurant import calc_congestion


async def get_restaurant(restaurant_id: UUID) -> RestaurantAll:

    async with get_session() as s:
        sql = select(Restaurant, OpeningTime).join(OpeningTime, Restaurant.restaurant_id == OpeningTime.restaurant_id)\
            .where(Restaurant.restaurant_id == restaurant_id)
        db_restaurant = (await s.execute(sql)).scalars().one()

    restaurant_data = RestaurantAll(
        restaurant_id=db_restaurant.restaurant_id,
        restaurant_name=db_restaurant.restaurant_name,
        restaurant_rate=db_restaurant.restaurant_rate,
        restaurant_category=db_restaurant.restaurant_category,
        restaurant_count_seats=db_restaurant.restaurant_count_seats,
        restaurant_x=db_restaurant.restaurant_x,
        restaurant_y=db_restaurant.restaurant_y,
        restaurant_address=db_restaurant.restaurant_address,
        restaurant_description=db_restaurant.restaurant_description,
        restaurant_contact=db_restaurant.restaurant_contact,
        restaurant_created_at=db_restaurant.restaurant_created_at,
        restaurant_updated_at=db_restaurant.restaurant_updated_at,
        opening_time_id=db_restaurant.opening_time_id,
        restaurant_opening_time_days=db_restaurant.restaurant_opening_time_days,
        restaurant_opening_time=db_restaurant.restaurant_opening_time,
        restaurant_break_time_days=db_restaurant.restaurant_break_time_days,
        restaurant_break_time=db_restaurant.restaurant_break_time,
        opening_time_created_at=db_restaurant.opening_time_created_at,
        opening_time_updated_at=db_restaurant.opening_time_updated_at,
        restaurant_congestion=calc_congestion(remaining_seats=db_restaurant.restaurant_count_seats)
    )

    return restaurant_data
