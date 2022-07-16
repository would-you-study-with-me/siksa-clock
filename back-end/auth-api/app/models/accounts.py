import uuid
from datetime import datetime

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from app.config.database import base


class Account(base):
    __tablename__ = 'user'

    id = Column(String, primary_key=True, index=True, comment='유저 인식 uuid')
    mobile = Column(Integer, unique=True, comment='휴대전화번호')
    password = Column(String, comment='암호화된 비밀번호')
    nickname = Column(String, unique=True, comment='별명')
    name = Column(String, nullalbe=True, comment='본명')
    device_uuid = Column(String, nullable=True, comment='휴대기기 uuid 값')
    refresh_token = Column(String, nulable=True, commnet='refresh token 값')
    created_at = Column(DateTime, default=datetime.now(), comment='생성 날짜 시간')
    updated_at = Column(DateTime, default=datetime.now(), onupdate=lambda x: datetime.now(), comment='변경 날짜 시간')


class Token(base):
    __tablename__ = 'token'

    id = Column(String, primary_key=True, comment='토큰 uuid')
