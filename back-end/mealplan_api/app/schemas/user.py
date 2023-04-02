import uuid
from datetime import datetime

from pydantic import BaseModel


class UserBase(BaseModel):
    email: str
    mobile: str
    password: str
    name: str
    nickname: str
    address: str


class UserToken(BaseModel):
    access_token: str
    refresh_token: str
    change_password_link: str


class TimeStamp(BaseModel):
    created_at: datetime
    updated_at: datetime


class User(UserBase, UserToken, TimeStamp):
    id: uuid.UUID


class RegisterInputUserData(UserBase):
    name: str | None
    nickname: str | None


class LoginData(BaseModel):
    email: str
    password: str
