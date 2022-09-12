from contextlib import asynccontextmanager
from typing import AsyncGenerator

from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.services.secret import get_secret

SQLALCHEMY_DATABASE_URL = "postgresql+asyncpg://{user}:{password}@{host}:{port}/{database_name}".format(
    user=get_secret('database_user'),
    password=get_secret('database_password'),
    host=get_secret('database_host'),
    port=get_secret('database_port'),
    database_name=get_secret('database_name'),
)

async_engine = create_async_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_size=20,
    echo=True,
    max_overflow=10,
    pool_pre_ping=True
)

async_session = sessionmaker(
    async_engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False
)

Base = declarative_base()


@asynccontextmanager
async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        async with session.begin():
            try:
                yield session
            finally:
                await session.close()


async def async_main():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    await async_engine.dispose()
