from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.service.secret import get_secret

SQLALCHEMY_DATABASE_URL = "mysql+mysqldb://{user}:{password}@{host}:{port}/{database_name}".format(
    user=get_secret('database_user'),
    password=get_secret('database_password'),
    host=get_secret('database_host'),
    port=get_secret('database_port'),
    database_name=get_secret('database_name'),
)

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_size=20,
    echo=True,
    max_overflow=10,
    pool_pre_ping=True
)

session = sessionmaker(
    engine,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False
)

Base = declarative_base()
