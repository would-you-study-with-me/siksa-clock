from uuid import UUID

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
        restaurant = Restaurants(**restaurant_data.dict())
        self.db.add(restaurant)
        self.db.commit()
        self.db.refresh(restaurant)
        return restaurant

    def get_restaurants(self, restaurant_id: UUID):
        return self.db.query(Restaurants).filter(Restaurants.id == restaurant_id).first()

    def get_restaurants(self, restarent_name: str):
        return self.db.query(Restaurants).filter(Restaurants).filter(Restaurants.name == restarent_name).first()

    def update_restaurant(self):
        pass


class OpeningTimeCRUD(AppCRUD):
    def create_opening_time(self, restaurant_id: UUID, opening_time_data: OpeningTimeBase):
        opening_time = OpeningTime(opening_time_data, restaurant_id=restaurant_id)
        self.db.add(opening_time)
        self.db.commit()
        self.db.refresh(opening_time)
        return opening_time

    def get_opening_time(self, opening_time_id: UUID):
        return self.db.query(OpeningTime).filter(opening_time_id == opening_time_id).first()

    def get_opening_time(self, restaurant_id: UUID):
        return self.db.query(OpeningTime).filter(restaurant_id == restaurant_id).first()

    def update_opening_time(self):
        pass
