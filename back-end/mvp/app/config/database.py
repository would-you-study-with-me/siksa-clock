from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.services.secret import get_secret

SQLALCHEMY_DATABASE_URL = "mysql+aiomysql://{user}:{password}@{host}:{port}/{database_name}".format(
    user=get_secret('database_user'),
    password=get_secret('database_password'),
    host=get_secret('database_host'),
    port=get_secret('database_port'),
    database_name=get_secret('database_name'),
)

engine = create_engine(SQLALCHEMY_DATABASE_URL, pool_size=20, max_overflow=10, echo=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
