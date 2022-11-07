from datetime import datetime
from uuid import UUID

from pydantic import BaseModel


class RestaurantBase(BaseModel):
    restaurant_name: str
    restaurant_rate: int
    restaurant_category: str | None
    restaurant_count_seats: int = 39
    restaurant_x: float | None
    restaurant_y: float | None
    restaurant_address: str | None
    restaurant_description: str | None
    restaurant_contact: str | None


class OpeningTimeBase(BaseModel):
    restaurant_opening_time_days: str | None
    restaurant_opening_time: str | None
    restaurant_break_time_days: str | None
    restaurant_break_time: str | None

class RestaurantTimeStampBase(BaseModel):
    restaurant_created_at: datetime
    restaurant_updated_at: datetime


class OpeningTimeStampBase(BaseModel):
    opening_time_created_at: datetime
    opening_time_updated_at: datetime


class InputRestaurant(BaseModel):
    restaurant_id: UUID


class OutputRestaurant(RestaurantBase, RestaurantTimeStampBase, OpeningTimeBase, OpeningTimeStampBase):
    restaurant_id: UUID
    restaurant_congestion: str
    restaurant_waiting_people: int

    class Config:
        orm_mode = True


class InputRestaurants(BaseModel):
    query: str
    x: float | None
    y: float | None
    skip: int | None = 0
    limit: int | None= 10
