from datetime import datetime
from uuid import UUID

import strawberry
from pydantic import BaseModel


class RestaurantBase(BaseModel):
    restaurant_name: str
    restaurant_rate: int
    restaurant_category: str | None
    restaurant_count_seats: int = 39
    restaurant_x: float
    restaurant_y: float
    restaurant_address: str | None
    restaurant_description: str | None
    restaurant_contact: str | None


class OpeningTimeBase(BaseModel):
    restaurant_opening_time_days: str | None
    restaurant_opening_time: str | None
    restaurant_break_time_days: str | None
    restaurant_break_time: str | None


class RestaurantTimeStampBase(BaseModel):
    restaurant_created_at: datetime.dateitme
    restaurant_updated_at: datetime.datetime


class OpeningTimeStampBase(BaseModel):
    opening_time_created_at: datetime.dateitme
    opening_time_updated_at: datetime.datetime


class RestaurantAllData(RestaurantBase, OpeningTimeBase, RestaurantTimeStampBase, OpeningTimeStampBase):
    restaurants_id: UUID
    opening_time_id: UUID

    class Config:
        orm_mode = True


@strawberry.experimental.pydantic.type(model=RestaurantAllData)
class RestaurantDataInput:
    restaurants_id: UUID
    opening_id: UUID
    name: str
    rate: int
    category: str | None
    count_seats: int = 39
    x: float
    y: float
    address: str | None
    description: str | None
    contact: str | None
    opening_time_days: str | None
    opening_time: str | None
    break_time_days: str | None
    break_time: str | None

