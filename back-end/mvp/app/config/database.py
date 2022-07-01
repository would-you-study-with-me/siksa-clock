from asyncio import current_task

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

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
async_session_factory = sessionmaker(autocommit=False, autoflush=False, bind=engine, class_=AsyncSession)

async_session = async_scoped_session(
    session_factory=async_session_factory,
    scoped_session=current_task,
)

base = declarative_base()
