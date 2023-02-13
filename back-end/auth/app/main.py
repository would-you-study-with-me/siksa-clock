from fastapi import Depends, FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(version="0.1", description="Siksa Auth")

origins = [
    "http://127.0.0.1:8080",
    "http://127.0.0.1",
    "http://localhost:8080",
    "http://localhost",
    "http://web.siksa-clock.kro.kr/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return {"Message": "Test??"}
