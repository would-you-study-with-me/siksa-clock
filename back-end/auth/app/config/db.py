import logging

from sqlalchemy import create_engine
from sqlalchemy.orm import Session

from app.model.account import Base
from app.service.secret import get_secret

logging.basicConfig(level=logging.INFO)

SQLALCHEMY_DATABASE_URL = "postgresql://{user}:{password}@{host}:{port}/{database_name}".format(
    user=get_secret("dev_user"),
    password=get_secret("dev_password"),
    host=get_secret("database_host"),
    port=get_secret("database_port"),
    database_name=get_secret("database_name"),
)

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_size=20,
    echo=True,
    max_overflow=10,
    pool_pre_ping=True
)

session = Session(
    engine,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False
)


def create_table():
    logging.info("auth api create table")
    Base.metadata.create_all(engine)
