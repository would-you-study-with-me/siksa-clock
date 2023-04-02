from datetime import datetime
from typing import Optional
from uuid import UUID

import strawberry
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
    restaurant_image: dict | None
    restaurant_menu: dict | None
    restaurant_opening_time_days: str | None
    restaurant_opening_time: str | None
    restaurant_break_time_days: str | None
    restaurant_break_time: str | None
    restaurant_opening_time_days: str | None
    restaurant_opening_time: str | None
    restaurant_break_time_days: str | None
    restaurant_break_time: str | None


class RestaurantTimeStampBase(BaseModel):
    restaurant_created_at: datetime
    restaurant_updated_at: datetime


class InputRestaurant(BaseModel):
    restaurant_id: UUID


class OutputRestaurant(RestaurantBase, RestaurantTimeStampBase):
    restaurant_id: UUID
    restaurant_congestion: str
    restaurant_waiting_people: int
    restaurant_distance: float | None

    class Config:
        orm_mode = True


class InputRestaurants(BaseModel):
    query: str
    x: float | None
    y: float | None
    skip: int | None = 0
    limit: int | None = 10


@strawberry.experimental.pydantic.type(
    model=OutputRestaurant,
    description="레스토랑에 대한 전체 데이터타입"
)
class OutputRestaurant:
    restaurant_id: strawberry.auto
    restaurant_congestion: strawberry.auto
    restaurant_waiting_people: strawberry.auto
    restaurant_distance: strawberry.auto
    restaurant_name: str
    restaurant_rate: int
    restaurant_category: strawberry.auto
    restaurant_count_seats: strawberry.auto
    restaurant_x: float | None
    restaurant_y: float | None
    restaurant_address: str | None
    restaurant_description: str | None
    restaurant_contact: str | None
    restaurant_image: strawberry.scalars.JSON
    restaurant_menu: strawberry.scalars.JSON
    restaurant_opening_time_days: Optional[str]
    restaurant_opening_time: Optional[str]
    restaurant_break_time_days: Optional[str]
    restaurant_break_time: Optional[str]
    restaurant_created_at: datetime
    restaurant_updated_at: datetime


@strawberry.experimental.pydantic.input(
    model=InputRestaurant,
    all_fields=True,
    description="Restaurant Input Data Type"
)
class InputRestaurant:
    pass


@strawberry.experimental.pydantic.input(
    model=InputRestaurants,
    all_fields=True,
    description="Restaurants Input Data Type"
)
class InputRestaurants:
    pass
