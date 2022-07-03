from uuid import UUID

from sqlalchemy import select

from app.models.restaurant import Restaurants, OpeningTime
from app.schemas.restaurant import RestaurantBase, RestaurantAllData, OpeningTimeBase
from app.services.database import AppService, AppCRUD


class RestaurantsService(AppService):
    def create_restaurant(self, restaurant_data: RestaurantBase):
        pass

    def update_restaurant(self, restaurant_data: RestaurantBase):
        pass

    def get_restaurants(self, restaurant_data: RestaurantAllData):
        pass


class RestaurantCRUD(AppCRUD):
    def create_restaurant(self, restaurant_data: RestaurantBase):
        pass

    def get_restaurant(self, restaurant_id: UUID):
        query = select(Restaurants).where(Restaurants.restaurant_id == restaurant_id)
        result = await self.db.execute(query)
        return result.scalar()

    def get_restaurant_restaurant_name(self, restarent_name: str):
        query = select(Restaurants).where(Restaurants.restaurant_name == restarent_name)
        result = await self.db.execute(query)
        return result.scalar()

    def get_restaurants(self, restaurant_id: UUID):
        query = select(Restaurants, OpeningTime).join(OpeningTime.restaurant_id).order_by(Restaurants.restaurant_id)
        result = await self.db.execute(query)
        return result.scalar()

    def update_restaurant(self):
        pass


class OpeningTimeCRUD(AppCRUD):
    def create_opening_time(self, restaurant_id: UUID, opening_time_data: OpeningTimeBase):
        pass

    def get_opening_time(self, opening_time_id: UUID):
        query = select(OpeningTime).where(OpeningTime.opening_time_id == opening_time_id)
        result = await self.db.execute(query)
        return result.scalar()

    def get_opening_time_restaurant_id(self, restaurant_id: UUID):
        query = select(OpeningTime).where(OpeningTime.restaurant_id == restaurant_id)
        result = await self.db.execute(query)
        return result.scalar()

    def update_opening_time(self):
        pass
