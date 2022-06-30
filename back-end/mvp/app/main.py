from fastapi import FastAPI

from app.routers.restaurant import restaurants_graphql_app

app = FastAPI(version=0.1)


app.include_router(restaurants_graphql_app, prefix='/restaurants')


@app.get('/')
async def welcome():
    return {'detail': 'I love you baby!!'}
