from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


SQLALCHEMY_DATABASE_URL = 'postgresql+asyncpg://auth_dev:auth_dev@127.0.0.1:5432/auth'

engine = create_async_engine(SQLALCHEMY_DATABASE_URL)

session_maker = sessionmaker(autocommit=False, autoflush=False, bind=engine)

base = declarative_base()
