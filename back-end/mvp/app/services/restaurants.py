from uuid import UUID

import strawberry

from app.resolvers.restaurant import get_restaurants, get_restaurant
from app.scalars.restaurant import RestaurantAll


@strawberry.type
class Query:

    # @strawberry.field
    # async def restaurants(self) -> RestaurantAll:
    #     restaurants = await get_restaurants()
    #     return restaurants

    @strawberry.field
    async def restaurant(self, restaurant_id: UUID) -> RestaurantAll:
        restaurant = await get_restaurant(restaurant_id=restaurant_id)
        return restaurant



# @strawberry.type
# class Subscription:
#
#     @strawberry.subscription
#     async def test(self):
#         pass
