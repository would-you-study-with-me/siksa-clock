from datetime import datetime
from typing import Optional

import strawberry

from app.schemas.restaurant import OutputRestaurant, InputRestaurant, InputRestaurants


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
    opening_time_created_at: datetime
    opening_time_updated_at: datetime



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
