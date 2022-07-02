import asyncio

import schema as schema
import strawberry
from strawberry.fastapi import GraphQLRouter
from strawberry.subscriptions import GRAPHQL_WS_PROTOCOL, GRAPHQL_TRANSPORT_WS_PROTOCOL
from typing import AsyncGenerator

restaurants_graphql_app = GraphQLRouter(schema=schema, subscription_protocols=[
    GRAPHQL_TRANSPORT_WS_PROTOCOL,
    GRAPHQL_WS_PROTOCOL,
])


@strawberry.type
class Query:
    @strawberry.field
    def hello(self) -> str:
        return 'Hello World!'


@strawberry.type
class Subscription:
    @strawberry.subscription
    async def count(self, target: int = 100) -> AsyncGenerator[int, None]:
        for i in range(target):
            yield i
            await asyncio.sleep(0.5)
    @strawberry.subscription
    async def subscriptions_restaurants(self, t):


schema = strawberry.Schema(query=Query, subscription=Subscription)
