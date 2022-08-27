from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.database import Base
from app.config.database import engine
from app.routers.restaurant import restaurant_graphql_app

Base.metadata.create_all(bind=engine)

app = FastAPI(version=0.3)

origins = [
    'http://web.siksa-clock.kro.kr',
    'https://web.siksa-clock.kro.kr',
    'http://127.0.0.1:8080',
    'http://127.0.0.1',
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://localhost',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(restaurant_graphql_app, prefix='/restaurant')
app.add_websocket_route('/restaurant', restaurant_graphql_app)


@app.get('/')
async def welcome():
    return {'detail': 'I love you baby!!'}
