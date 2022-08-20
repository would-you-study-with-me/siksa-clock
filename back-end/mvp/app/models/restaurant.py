import uuid
from datetime import datetime

from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, Float
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.config.database import Base


class Restaurants(Base):
    __tablename__ = 'restaurant'

    restaurant_id = Column(UUID, primary_key=True, default=lambda: uuid.uuid4(), comment='레스토랑 id')
    restaurant_name = Column(String, comment='식당이름')
    restaurant_rate = Column(Integer, comment='식당평점 0~5')
    restaurant_category = Column(String, nullable=True, comment='식당 카테고리')
    restaurant_count_seats = Column(Integer, default=39, comment='식당 자리수')
    restaurant_x = Column(Float, nullable=True, comment='X좌표')
    restaurant_y = Column(Float, nullable=True, comment='Y좌표')
    restaurant_address = Column(String, nullable=True, comment='식당 주소')
    restaurant_description = Column(String, nullable=True, comment='식당 설명')
    restaurant_contact = Column(String, nullable=True, comment='식당 전화번호')
    restaurant_created_at = Column(DateTime, default=datetime.now(), comment='생성날짜')
    restaurant_updated_at = Column(DateTime, default=datetime.now(), onupdate=lambda: datetime.now(),
                        comment='수정날짜')


class OpeningTime(Base):
    __tablename__ = 'opening_time'

    opening_time_id = Column(UUID, primary_key=True, comment='여는 시간 id')
    restaurant_id = Column(UUID, ForeignKey('restaurant.restaurant_id'), comment='레스토랑 id')
    restaurant_opening_time_days = Column(String, nullable=True, comment='식당 여는 시간 날짜 (ex: Mon,Tue,Fri,Sat)')
    restaurant_opening_time = Column(String, nullable=True, comment='식당 여는 시간 (ex: 12:30~15:30/14:20~15:20)')
    restaurant_break_time_days = Column(String, nullable=True, comment='브레이크 타임 날짜 (ex: Mon, Tue, Wed, Thu')
    restaurant_break_time = Column(String, nullable=True, comment='브레이크 타임 시간(ex : 12:30~17:40/12:12~16:45)')
    opening_time_created_at = Column(DateTime, default=datetime.now(), comment='생성날짜')
    opening_time_updated_at = Column(DateTime, default=datetime.now(), onupdate=lambda: datetime.now(),
                        comment='수정날짜')

    restaurant = relationship('Restaurants', backref='opening_time')
