from fastapi import FastAPI

from app.config.database import Base
from app.config.database import engine
from app.routers.restaurant import restaurant_graphql_app

Base.metadata.create_all(bind=engine)

app = FastAPI(version=0.3)

app.include_router(restaurant_graphql_app, prefix='/restaurant')
app.add_websocket_route('/restaurant', restaurant_graphql_app)


@app.get('/')
async def welcome():
    return {'detail': 'I love you baby!!'}
