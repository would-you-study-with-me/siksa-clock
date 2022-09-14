import asyncio
from typing import List

import strawberry

from strawberry.fastapi import GraphQLRouter

from app.schemas.restaurant import RestaurantAll


@strawberry.type
class Query:
    pass

schema = strawberry.Schema(
    query=Query
)

restaurant_graphql_app = GraphQLRouter(
    schema=schema,
    graphiql=True,
)
