import uuid
from datetime import datetime

from sqlalchemy import Boolean, Column, String, Integer, Boolean, ForeignKey, DateTime, Float
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.config.database import base


class Restaurants(base):
    __tablename__ = 'restaurants'

    id = Column(UUID, primary_key=True, default=lambda: uuid.uuid4(), comment='레스토랑 id')
    name = Column(String, comment='식당이름')
    rate = Column(Integer(1), comment='식당평점 0~5')
    category = Column(String, nullable=True, comment='식당 카테고리')
    count_seats = Column(Integer, default=39, comment='식당 자리수')
    x = Column(Float, comment='X좌표')
    y = Column(Float, comment='Y좌표')
    address = Column(String, nullable=True, comment='식당 주소')
    description = Column(String, nullable=True, comment='식당 설명')
    contact = Column(String, nullable=True, comment='식당 전화번호')
    created_at = Column(DateTime, default=datetime.datetime.now(), comment='생성날짜')
    updated_at = Column(DateTime, default=datetime.datetime.now(), onupdate=lambda: datetime.datetime.now(),
                        comment='수정날짜')




class OpeningTime(base):
    __tablename__ = 'opening_time'

    id = Column(UUID, primary_key=True, default=lambda: uuid.uuid4(), comment='여는 시간 id')
    restaurant_id = Column(UUID, ForeignKey('restaurants.id'))
    opening_time_days = Column(String, nullable=True, commnet='식당 여는 시간 날짜 (ex: Mon,Tue,Fri,Sat)')
    opening_time = Column(String, nullable=True, commnet='식당 여는 시간 (ex: 12:30~15:30/14:20~15:20)')
    break_time_days = Column(String, nullable=True, comment='브레이크 타임 날짜 (ex: Mon, Tue, Wed, Thu')
    break_time = Column(String, nullable=True, comment='브레이크 타임 시간(ex : 12:30~17:40/12:12~16:45)')
    created_at = Column(DateTime, default=datetime.datetime.now(), comment='생성날짜')
    updated_at = Column(DateTime, default=datetime.datetime.now(), onupdate=lambda: datetime.datetime.now(),
                        comment='수정날짜')

    restaurant_id = relationship("Restaurants")
