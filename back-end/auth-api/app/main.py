from fastapi import FastAPI

app = FastAPI(version=0.1)


@app.get('/')
async def welcome():
    return {'detail': 'I love you baby!! '}
