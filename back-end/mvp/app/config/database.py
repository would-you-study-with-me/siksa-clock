from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.services.secret import get_secret

SQLALCHEMY_DATABASE_URL = 'postgresql+asyncpg://{user}:{password}@{host}:{port}/{dbname}'.format(
    user=get_secret('database_user'),
    password=get_secret('database_password'),
    host=get_secret('database_host'),
    port=get_secret('database_port'),
    dbname=get_secret('database_name')
)

engine = create_async_engine(SQLALCHEMY_DATABASE_URL)

session_local = sessionmaker(autocommit=False, autoflush=False, bind=engine)

base = declarative_base()
