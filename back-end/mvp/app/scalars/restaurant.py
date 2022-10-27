import strawberry

from app.schemas.restaurant import RestaurantOpeningTimeOutput


@strawberry.experimental.pydantic.type(
    model=RestaurantOpeningTimeOutput,
    all_fields=True,
    description="레스토랑에 대한 전체 데이터타입"
)
class RestaurantAll:
    pass
