# Siksa Clock Back-End MVP

> 째깍식사를 GraphQL MVP를 만듭니다.

## 기능 정리

- 위치를 기반으로 식당 정보들을 가져온다.
- 식당 상세 정보를 가져온다.
- X,Y 좌표값 -> 주소 or 주소 -> X, Y 좌표값
  (현재 위치와 음식점 거리를 측정하기 위함)

## 개발 환경

### MVP 초장기 모델

- 언어 : Python 3.10 higher
- 패키지 의존성 관리 및 환경설정 : Poetry
- 웹 프레임워크 : FastAPI
- GraphQL 라이브러리 : Strawberry
- 테스트 라이브러리 : Pytest
- DB 프레임워크 및 라이브러리 : SQLAlchemy 1.4 (async)
- DBMS : MariaDB, MongoDB(Log용)

## 디렉토리 구조

- app
  - config/ : 설정 파일(Database 설정 etc)
  - models/ : DB DDL이 있는 파일(데이터 정의어, 테이블 구조 정의)
  - resolvers/ : Resolvers 파일, GraphQL schema에 맞는 데이터를 채우는 기능(Starwberry Lib)
  - routers/ : FastAPI Router URL dispath
  - scalars/ : GraphQL scalar 모음
  - schemas/ : DataType schemas (pydantic)
  - graphql/ : GraphQL 쿼리 타입(Query, Mutationt etc)
  - service/ : 서비스 기능(필요한 중복 기능)
  - test/ : Test Code
- Dockerfile : docker setting 파일
- poetry.lock : poetry 고정 디펜던시 파일
- pyproject.toml : peotry 셋팅 파일 (black setting etc)
- requirements.txt : pip 셋팅 파일
- README.md: 설명 markdown 파일

## 데이터베이스 설계

데이터베이스 설계가 필요합니다.