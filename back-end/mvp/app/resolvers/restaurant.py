import typing
from uuid import UUID

from sqlalchemy import delete, select, update

from app.config.database import get_session
from app.models.restaurant import Restaurants, OpeningTime
from app.scalars.restaurant import RestaurantAll


async def get_restaurants() -> typing.List[Restaurants]:

    async with get_session() as s:
        sql = select(Restaurants).join(OpeningTime).order_by(Restaurants.restaurant_id)
        db_users = (await s.execute(sql)).scalars().unique().all()
        print(db_users)

    return db_users


async def get_restaurant(restaurant_id: UUID) -> RestaurantAll:

    async with get_session() as s:
        sql = select(Restaurants).join(OpeningTime).where(Restaurants.restaurant_id == restaurant_id)
        db_user = (await s.execute(sql)).scalars().first()
        print(db_user)

    return db_user


async def add_user():
    pass


async def delete_user():
    pass
