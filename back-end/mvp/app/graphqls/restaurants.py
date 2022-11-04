from uuid import UUID

import strawberry
from strawberry.types import Info

from app.resolvers.restaurant import get_restaurant
from app.scalars.restaurant import OutputRestaurant, InputRestaurant


@strawberry.type
class Query:
    @strawberry.field
    async def restaurant(self, input_data: InputRestaurant) -> OutputRestaurant:
        restaurant_data = await get_restaurant(restaurant_input_data=input_data)
        return restaurant_data

    # @strawberry.field
    # async def restaurants(self):
    #     pass