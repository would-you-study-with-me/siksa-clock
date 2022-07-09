from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from app.config.database import Base
from app.config.database import engine
from app.dependencies import get_db
from app.routers.restaurant import restaurants_graphql_app
from app.services.restaurants import RestaurantService

Base.metadata.create_all(bind=engine)

app = FastAPI(version=0.1)

# app.include_router(restaurants_graphql_app, prefix='/restaurants')


@app.get('/')
async def welcome():
    return {'detail': 'I love you baby!!'}
