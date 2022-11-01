import strawberry
from strawberry.fastapi import GraphQLRouter

from app.graphqls.coords import Query

schema = strawberry.federation.Schema(
    query=Query
)

choord_graphql_app = GraphQLRouter(
    schema=schema,
    graphiql=True,
)
