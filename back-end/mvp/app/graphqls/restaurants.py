from typing import List

import strawberry

from app.resolvers.restaurant import get_restaurant, get_restaurants
from app.scalars.restaurant import OutputRestaurant, InputRestaurant, InputRestaurants


@strawberry.type(description="째깍식사 레스토랑 데이터 가져오기")
class Query:
    @strawberry.field(description="레스토랑 하나의 데이터만 가져오는 쿼리")
    async def restaurant(self, input_data: InputRestaurant) -> OutputRestaurant:
        restaurant_data = await get_restaurant(restaurant_input_data=input_data)
        return restaurant_data

    @strawberry.field(description="레스토랑 전체 데이터를 가져오는 쿼리")
    async def restaurants(self, input_data: InputRestaurants) -> List[OutputRestaurant]:
        restaurant_data = await get_restaurants(restaurants_input_data=input_data)
        return restaurant_data


# @strawberry.type(description="째깍식사 레스토랑 데이터를 실시간으로 가져오는 Subscriptions")
# class Subscription:
#     @strawberry.subscription
#     async def restaurants(self):
#         pass