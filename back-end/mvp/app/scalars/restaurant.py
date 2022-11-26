import strawberry

from app.schemas.restaurant import OutputRestaurant, InputRestaurant, InputRestaurants


@strawberry.experimental.pydantic.type(
    model=OutputRestaurant,
    all_fields=True,
    description="레스토랑에 대한 전체 데이터타입"
)
class OutputRestaurant:
    pass


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
