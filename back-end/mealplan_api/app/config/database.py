
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, DeclarativeBase

from app.models.restaurant import RestaurantBase
from app.models.user import UserBase
from app.services.secret import get_secret

SQLALCHEMY_DATABASE_URL = "postgresql://{user}:{password}@{host}:{port}/{database_name}".format(
    user=get_secret('dev_user'),
    password=get_secret('dev_password'),
    host=get_secret('database_host'),
    port=get_secret('database_port'),
    database_name=get_secret('database_name'),
)

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    echo=True,
    pool_size=20,
    max_overflow=10,
    pool_timeout=30,
    pool_pre_ping=True,
    pool_recycle=900
)

session = Session(bind=engine, autocommit=False, autoflush=False)




def create_table():
    UserBase.metadata.create_all(engine)
    RestaurantBase.metadata.create_all(engine)
