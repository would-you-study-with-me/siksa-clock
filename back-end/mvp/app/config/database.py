from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = 0

engine = create_async_engine(SQLALCHEMY_DATABASE_URL)

session_local = sessionmaker(autocommit=False, autoflush=False, bind=engine)

base = declarative_base()
