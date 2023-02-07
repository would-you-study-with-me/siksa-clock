import uuid
from datetime import datetime

from sqlalchemy import Column, String, Integer, DateTime
from sqlalchemy.dialects.mysql import DOUBLE, JSON

from app.config.database import Base


class Restaurant(Base):
    __tablename__ = 'restaurant'

    restaurant_id = Column(String(36), primary_key=True, default=lambda: uuid.uuid4(), index=True, comment='레스토랑 id')
    restaurant_name = Column(String(50), index=True, comment='식당이름')
    restaurant_rate = Column(Integer, comment='식당평점 0~5')
    restaurant_category = Column(String(30), nullable=True, comment='식당 카테고리')
    restaurant_count_seats = Column(Integer, default=39, comment='식당 자리수')
    restaurant_x = Column(DOUBLE(), nullable=True, comment='X좌표')
    restaurant_y = Column(DOUBLE(), nullable=True, comment='Y좌표')
    restaurant_address = Column(String(150), index=True, nullable=True, comment='식당 주소')
    restaurant_description = Column(String(100), nullable=True, comment='식당 설명')
    restaurant_contact = Column(Integer, nullable=True, comment='식당 전화번호')
    restaurant_image = Column(JSON, nullable=True, comment="레스토랑 이미지")
    restaurant_menu = Column(JSON, nullable=True, comment="메뉴판 이미지")
    restaurant_opening_time_days = Column(String(150), nullable=True, comment='식당 여는 시간 날짜 (ex: Mon,Tue,Fri,Sat)')
    restaurant_opening_time = Column(String(150), nullable=True, comment='식당 여는 시간 (ex: 12:30~15:30/14:20~15:20)')
    restaurant_break_time_days = Column(String(150), nullable=True, comment='브레이크 타임 날짜 (ex: Mon, Tue, Wed, Thu')
    restaurant_break_time = Column(String(150), nullable=True, comment='브레이크 타임 시간(ex : 12:30~17:40/12:12~16:45)')
    restaurant_created_at = Column(DateTime, default=datetime.now(), comment='생성날짜')
    restaurant_updated_at = Column(DateTime, default=datetime.now(), onupdate=lambda: datetime.now(),
                                   comment='수정날짜')
