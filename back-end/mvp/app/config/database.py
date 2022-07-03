from asyncio import current_task

from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_scoped_session
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session

from app.services.secret import get_secret

SQLALCHEMY_DATABASE_URL = 'postgresql+asyncpg://{user}:{password}@{host}:{port}/{dbname}'.format(
    user=get_secret('database_user'),
    password=get_secret('database_password'),
    host=get_secret('database_host'),
    port=get_secret('database_port'),
    dbname=get_secret('database_name')
)

engine = create_async_engine(SQLALCHEMY_DATABASE_URL, pool_recycle=3600)

async_session_factory = sessionmaker(autocommit=False, autoflush=False, bind=engine, class_=AsyncSession, echo=True)

# engine = create_engine(SQLALCHEMY_DATABASE_URL, pool_size=20, pool_pre_ping=True, pool_recycle=3600, max_overflow=10)



# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# async_session = async_scoped_session(
#     session_factory=async_session_factory,
#     scopefunc=current_task,
# )

base = declarative_base()


# async def create_table():
#     async with engine.begin() as conn:
#         await conn.run_sync(base.metadata.create_all)
#
#
# async def reset_table():
#     async with engine.begin() as conn:
#         await conn.run_sync(base.metadata.drop_all)
#         await conn.run_sync(base.metadata.create_all)
