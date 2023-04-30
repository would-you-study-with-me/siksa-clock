import asyncio

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.database import create_table
from app.routers.restaurant import restaurant_graphql_app

app = FastAPI(version='3.0')

app.include_router(restaurant_graphql_app, prefix='/restaurant')
app.add_websocket_route('/restaurant', restaurant_graphql_app)


# CORS middleware 규모가 커지면 분리
origins = [
    "http://localhost",
    "http://127.0.0.1",
    "http://localhost:7777",
    "http://127.0.0.1:7777",
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "http://web.siksa-clock.kro.kr",
    "https://web.siksa-clock.kro.kr",
    "https://127.0.0.1:7777",
    "https://localhost:7777",
    "https://127.0.0.1",
    "https://localhost",
    "https://would-you-study-with-me.github.io",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
async def welcome():
    return {'Can`t take my off you': 'I love you baby!!'}


if __name__ == '__main__':
    print("Database Loading")
    create_table()
    print("Database Done!")

    print("Start Server")
    uvicorn.run("main:app", host='127.0.0.1', port=7777, reload=True)
