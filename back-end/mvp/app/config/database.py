from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Todo : 이 부분은 추가적으로 환경변수 또는 비밀파일 패턴으로 사용해보기
SQLALCHEMY_DATABASE_URL = 'postgresql+asyncpg://service:service@61.97.186.215/siksa_clock'

engine = create_async_engine(SQLALCHEMY_DATABASE_URL)

session_local = sessionmaker(autocommit=False, autoflush=False, bind=engine)

base = declarative_base()
