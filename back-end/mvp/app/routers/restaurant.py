from datetime import datetime
from typing import List

import strawberry

from strawberry.fastapi import GraphQLRouter

from app.schemas.restaurant import RestaurantAll, RestaurantAllData
from app.services.restaurants import RestaurantService


@strawberry.type
class Query:
    @strawberry.field
    async def hello(self) -> str:
        return "Hello, world!"

    @strawberry.field
    async def mock_restaurants(self) -> RestaurantAll:
        mock_data = RestaurantAll(
            restaurant_id='147608b5-9e46-45e1-b947-989150ddd76b',
            opening_time_id='147608b5-9e46-45e1-b947-989150ddd76b',
            restaurant_name='헤일분식점',
            restaurant_rate=5,
            restaurant_category='분식집',
            restaurant_count_seats='250',
            restaurant_x='412283.456788662',
            restaurant_y='229268.903702646',
            restaurant_address='울산광역시 남구 화합로178번길 20, 2층 (삼산동)',
            restaurant_description='울산에 놀러가다가 분식집 차리고 싶어서 차림',
            restaurant_contact='01000000000',
            restaurant_opening_time_days='Wed, Fri',
            restaurant_opening_time='12:30~14:30',
            restaurant_break_time_days=None,
            restaurant_break_time=None,
            restaurant_congestion='crowded',
            restaurant_created_at=datetime.utcnow(),
            restaurant_updated_at=datetime.utcnow(),
            opening_time_created_at=datetime.utcnow(),
            opening_time_updated_at=datetime.utcnow()
        )
        return mock_data

    @strawberry.field
    async def restaurants(self, skip: int = 0, limit: int = 10) -> List[RestaurantAll]:
        return RestaurantService().get_restaurants(skip=skip, limit=limit)


@strawberry.type
class Subscription:
    @strawberry.subscription
    async def restaurants_list(self, skip: int = 0, limit: int = 10) -> List[RestaurantAll]:
        return RestaurantService.get_restaurants(self=self, skip=skip, limit=limit)


schema = strawberry.Schema(
    query=Query,
    subscription=Subscription
)

restaurant_graphql_app = GraphQLRouter(
    schema=schema,
    graphiql=True,
)

