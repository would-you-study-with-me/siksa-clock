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


schema = strawberry.Schema(query=Query)
