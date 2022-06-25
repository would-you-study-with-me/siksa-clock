from sqlalchemy import Boolean, Column, String, Integer, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship

from app.config.database import base


class Restaurants(base):
    __tablename__ = 'restaurants'

    id = Column(Integer, primary_key=True)
    name = Column(String, comment='hye')
