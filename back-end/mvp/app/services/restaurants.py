from typing import List
from uuid import UUID

from fastapi import HTTPException

from app.models.restaurant import Restaurants, OpeningTime
from app.models.restaurant import OpeningTime
from app.schemas.restaurant import RestaurantOutput, RestaurantInput, RestaurantOpeningTimeOutput, OpeningTimeInput, \
    OpeningTimeOutput, RestaurantAll
from app.services.main import AppCRUD, AppService


class RestaurantService(AppService):
    def create_restaurant(self, restaurant_data: RestaurantInput):
        restaurant = RestaurantCRUD(self.db).create_restaurant(restaurant_data)
        if not restaurant:
            raise HTTPException(status_code=404, message="Couldn't create restaurant")
        return restaurant

    def get_restaurant(self, restaurant_id: UUID) -> RestaurantAll:
        restaurant = RestaurantCRUD(self.db).get_restaurant(restaurant_id)
        if not restaurant:
            raise HTTPException(status_code=404, message="Couldn't find restaurant")
        return restaurant

    def get_restaurants(self, skip: int = 0, limit: int = 10) -> List[RestaurantAll]:
        restaurants = RestaurantCRUD.get_restaurants(skip, limit).all()
        if not restaurants:
            raise HTTPException(status_code=404, message="Couldn't find")
        return restaurants

    def get_restaurants_plus_opening_time(self, skip: int = 0, limit: int = 10):
        restaurants_plus_opening_time = RestaurantCRUD(self.db).get_restaurants_plus_opening_time(skip, limit)
        if not restaurants_plus_opening_time:
            raise HTTPException(status_code=404, message="Couldn't find")
        return restaurants_plus_opening_time

    def get_restaurant_plus_opening_time_by_restaurant_id(self, restaurant_id: UUID):
        restaurant_plus_opening_time = RestaurantCRUD(self.db).get_restaurant_plus_opening_time_by_restaurant_id(
            restaurant_id=restaurant_id
        )
        if not restaurant_plus_opening_time:
            raise HTTPException(status_code=404, message="Couldn't find")
        return restaurant_plus_opening_time


class OpeningTimeService(AppService):
    def create_opening_time(self, opening_time: OpeningTimeInput):
        pass


class RestaurantCRUD(AppCRUD):

    def create_restaurant(self, restaurant: RestaurantInput) -> RestaurantOutput:
        db_restaurant = Restaurants(**restaurant.dict())
        self.db.add(db_restaurant)
        self.db.commit()
        self.db.refresh(db_restaurant)
        return db_restaurant

    def get_restaurant(self, restaurant_id: UUID) -> RestaurantOutput:
        return self.db.query(Restaurants).filter(Restaurants.restaurant_id == restaurant_id).first()

    def get_restaurants(self, skip: int = 0, limit: int = 10) -> List[RestaurantOutput]:
        return self.db.query(Restaurants).offset(skip).limit(limit).all()

    def get_restaurants_plus_opening_time(self, skip: int = 0, limit: int = 10) -> List[RestaurantOpeningTimeOutput]:
        return self.db.query(Restaurants).join(OpeningTime.restaurant_id == Restaurants.restaurant_id)\
            .offset(skip).limit(limit).all()

    def get_restaurant_plus_opening_time_by_restaurant_id(self, restaurant_id: UUID) -> List[RestaurantOpeningTimeOutput]:
        return self.db.query(Restaurants).join(OpeningTime.restaurant_id == Restaurants.restaurant_id)\
            .filter(Restaurants.restaurant_id == restaurant_id).first()


class OpeningTimeCRUD(AppCRUD):
    def create_opening_time(self, opening_time: OpeningTimeInput) -> OpeningTimeOutput:
        db_opening_time = OpeningTime(**opening_time.dict())
        self.db.add(db_opening_time)
        self.db.commit()
        self.db.refresh(db_opening_time)
        return db_opening_time

    def get_opening_time(self, opening_id: UUID):
        return self.db.query(OpeningTime).filter(OpeningTime.opening_time_id == opening_id).first()

    def get_opening_time_by_restaurant_id(self, restaurant_id: UUID):
        return self.db.query(OpeningTime).filter(OpeningTime.restaurant_id == restaurant_id).first()
