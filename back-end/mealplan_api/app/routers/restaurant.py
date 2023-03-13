import strawberry

from strawberry.fastapi import GraphQLRouter

from app.graphqls.restaurants import Query

schema = strawberry.federation.Schema(
    query=Query
)

restaurant_graphql_app = GraphQLRouter(
    schema=schema,
    graphiql=True,
)
