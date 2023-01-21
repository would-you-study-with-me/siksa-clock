import asyncio

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.database import create_table
from app.routers.restaurant import restaurant_graphql_app

app = FastAPI(version='1.6')

app.include_router(restaurant_graphql_app, prefix='/restaurant')
app.add_websocket_route('/restaurant', restaurant_graphql_app)


# CORS middleware 규모가 커지면 분리
origins = [
    "http://localhost",
    "http://127.0.0.1",
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "http://web.siksa-clock.kro.kr",
    "https://web.siksa-clock.kro.kr",
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


@app.get('/video')
async def love_song():
    data = {
        '신라 스폰지밥' : 'https://youtu.be/yz3INXooClk',
        '달사 노래 목 쉬었을때': 'https://photos.app.goo.gl/Vp9i7HuBhJCH5Tms6',
        '달사 일렉 기타(노래 못부름 ㅠㅠ) paris in the rain': 'https://photos.app.goo.gl/dqBCbvuKxAEVhgQr7',
        '요즘 듣는 노래': 'https://youtu.be/HKb-mIky31o'
    }
    return data


if __name__ == '__main__':
    print("Database Loading")
    asyncio.run(create_table())
    print("Database Done!")

    print("Start Server")
    uvicorn.run("main:app", host='127.0.0.1', port=80, reload=True)
