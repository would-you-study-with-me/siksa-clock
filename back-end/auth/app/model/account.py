import uuid
from datetime import datetime

from sqlalchemy import Column, String, DateTime

from app.config.db import Base


class Account(Base):
    __tablename__ = "accounts"

    id = Column(String(36), primary_key=True, default=lambda : uuid.uuid4(), index=True, comment="회원데이터 id")
    email = Column(String(100), index=True, unique=True, comment="회원 이메일")
    mobile = Column(String(100), index=True, unique=True, nullable=True, comment="회원 전화번호")
    password = Column(String(200), comment="회원 비밀번호")
    name = Column(String(70), comment="사용자이름")
    nickname = Column(String(20), comment="사용자 닉네임")
    address = Column(String(60), comment="사용자 주소(도로명)")
    access_token =Column(String(150), nullable=True, comment="엑세스 토큰")
    refresh_token = Column(String(150), nullable=True, comment="리프레시 토큰")
    change_password_link = Column(String(100), nullable=True, comment="비밀번호 변경 사이트")
    created_at = Column(DateTime, default=datetime.now(), comment="계정 생성날짜")
    updated_at = Column(DateTime, default=datetime.now(), onupdate=lambda: datetime.now(), comment="계정 수정날짜")
