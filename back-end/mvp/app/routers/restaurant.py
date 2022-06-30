import asyncio

import schema as schema
import strawberry
from strawberry.fastapi import GraphQLRouter
from typing import AsyncGenerator

restaurants_graphql_app = GraphQLRouter(schema=schema)


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


schema = strawberry.Schema(query=Query, subscription=Subscription)
