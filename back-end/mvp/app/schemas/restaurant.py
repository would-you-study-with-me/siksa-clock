from datetime import datetime
from uuid import UUID

import strawberry.experimental.pydantic
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


class RestaurantInput(RestaurantBase):
    pass


class OpeningTimeInput(OpeningTimeBase):
    pass


class RestaurantTimeStampBase(BaseModel):
    restaurant_created_at: datetime
    restaurant_updated_at: datetime


class OpeningTimeStampBase(BaseModel):
    opening_time_created_at: datetime
    opening_time_updated_at: datetime


class RestaurantOutput(RestaurantBase, RestaurantTimeStampBase):
    restaurant_id: UUID

    class Config:
        orm_mode = True


class OpeningTimeOutput(OpeningTimeBase, OpeningTimeStampBase):
    opening_time_id: UUID
    restaurant_id: UUID

    class Config:
        orm_mode = True


class RestaurantOpeningTimeOutput(RestaurantBase, RestaurantTimeStampBase, OpeningTimeBase, OpeningTimeStampBase):
    restaurant_id: UUID
    opening_time_id: UUID


class RestaurantAllData(RestaurantBase, RestaurantTimeStampBase):
    restaurant_id: UUID

    class Config:
        orm_mode = True


class OpeningTimeAllData(OpeningTimeBase, OpeningTimeStampBase):
    opening_time_id: UUID
    restaurants_id: UUID

    class Config:
        orm_mode = True


# @strawberry.experimental.pydantic.type(model=RestaurantOpeningTimeOutput)
# class RestaurantOpeningTimeOutput:
#     restaurant_id: UUID
#     opening_time_id: UUID
#     restaurant_name: str
#     restaurant_rate: int
#     restaurant_category: str | None
#     restaurant_count_seats: int = 39
#     restaurant_x: float | None
#     restaurant_y: float | None
#     restaurant_address: str | None
#     restaurant_description: str | None
#     restaurant_contact: str | None
