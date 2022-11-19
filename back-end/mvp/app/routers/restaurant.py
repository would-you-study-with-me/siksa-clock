import strawberry

from strawberry.fastapi import GraphQLRouter

from app.graphql.restaurants import Query

schema = strawberry.Schema(
    query=Query
)

restaurant_graphql_app = GraphQLRouter(
    schema=schema,
    graphiql=True,
)
