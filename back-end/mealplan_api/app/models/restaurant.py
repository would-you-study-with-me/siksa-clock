import uuid
from datetime import datetime

from sqlalchemy import String, Integer, DateTime
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase
from sqlalchemy.dialects.postgresql import JSON, UUID, FLOAT

class RestaurantBase(DeclarativeBase):
    pass

class Restaurant(RestaurantBase):
    __tablename__ = 'restaurant'

    restaurant_id: Mapped[uuid.UUID] = mapped_column(UUID, primary_key=True, index=True, default=lambda: uuid.uuid4(), comment="식당 ID")
    restaurant_name: Mapped[str] = mapped_column(String(50), index=True, comment="식당 이름")
    restaurant_rate: Mapped[int] = mapped_column(Integer, comment="식당평점 0~5")
    restaurant_category: Mapped[str] = mapped_column(String(30), nullable=True, comment="식당 종류")
    restaurant_count_seats: Mapped[int] = mapped_column(Integer, default=39, comment="식당 자리수")
    restaurant_x: Mapped[float] = mapped_column(FLOAT, nullable=True, comment="X좌표")
    restaurant_y: Mapped[float] = mapped_column(FLOAT, nullable=True, comment='Y좌표')
    restaurant_address: Mapped[str] = mapped_column(String(150), index=True, nullable=True, comment='식당 주소')
    restaurant_description: Mapped[str] = mapped_column(String(100), nullable=True, comment='식당 설명')
    restaurant_contact: Mapped[int] = mapped_column(Integer, nullable=True, comment='식당 전화번호')
    restaurant_image: Mapped[dict] = mapped_column(JSON, nullable=True, comment="레스토랑 이미지")
    restaurant_menu: Mapped[dict] = mapped_column(JSON, nullable=True, comment="메뉴판 이미지")
    restaurant_opening_time_days: Mapped[str] = mapped_column(String(150), nullable=True, comment='식당 여는 시간 날짜 (ex: Mon,Tue,Fri,Sat)')
    restaurant_opening_time: Mapped[str] = mapped_column(String(150), nullable=True, comment='식당 여는 시간 (ex: 12:30~15:30/14:20~15:20)')
    restaurant_break_time_days: Mapped[str] = mapped_column(String(150), nullable=True, comment='브레이크 타임 날짜(ex : Mon,Tue,Wed)')
    restaurant_break_time: Mapped[str] = mapped_column(String(150), nullable=True, comment='브레이크 타임 시간(ex : 12:30~17:40/12:12~16:45)')
    restaurant_created_at = mapped_column(DateTime, default=datetime.now(), comment='생성날짜')
    restaurant_updated_at = mapped_column(DateTime, default=datetime.now(), onupdate=lambda: datetime.now(),
                                   comment='수정날짜')
