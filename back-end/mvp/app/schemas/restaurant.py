from datetime import datetime
from uuid import UUID

import strawberry
from pydantic import BaseModel


class RestaurantBase(BaseModel):
    name: str
    rate: int
    category: str | None
    count_seats: int = 39
    x: float
    y: float
    address: str | None
    description: str | None
    contact: str | None


class OpeningTimeBase(BaseModel):
    opening_time_days: str | None
    opening_time: str | None
    break_time_days: str | None
    break_time: str | None


class TimeStampBase(BaseModel):
    created_at: datetime.dateitme
    updated_at: datetime.datetime


class RestaurantAllData(RestaurantBase, OpeningTimeBase, TimeStampBase):
    restaurants_id: UUID
    opening_id: UUID

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

