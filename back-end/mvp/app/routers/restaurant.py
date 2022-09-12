import asyncio
from typing import List

import strawberry

from strawberry.fastapi import GraphQLRouter

from app.schemas.restaurant import RestaurantAll


# TODO: 나중에 분리
async def resolve_hellow(root) -> str:
    await asyncio.sleep(1)
    return "Hello"


@strawberry.type
class Query:

    @strawberry.field
    async def hello(self) -> str:
        pass
        # hello: str = strawberry.field(resolver=resolve_hellow)

    @strawberry.field
    def mock_restaurants(self) -> List[RestaurantAll]:
        pass


schema = strawberry.Schema(
    query=Query
)

restaurant_graphql_app = GraphQLRouter(
    schema=schema,
    graphiql=True,
)
