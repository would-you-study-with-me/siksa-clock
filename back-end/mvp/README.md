# Siksa Clock Back-End MVP

> 째깍식사를 MVP 기능 구현을 합니다.

째깍식사의 핵심적인 기능을 GraphQL을 통해서 구현함.

## 기능 정리

- 위치를 기반으로 식당 정보들을 가져온다.
- 식당 상세 정보를 가져온다.
- X,Y 좌표값 -> 주소 or 주소 -> X, Y 좌표값
  (현재 위치와 음식점 거리를 측정하기 위함)

## 사용 방법

GraphiQL을 통해서 테스트 및 사용이 가능합니다.
[GraphiQL](http://web.siksa-clock.kro.kr/restaurant)
위 기능을 통해서 Schema와 Query를 통해서 사용합니다.
![참고이미지](https://github.com/hyeonprojects/Images/blob/master/would_you_study_with_me/siksa_schema.JPG?raw=true)


## 개발 환경

### MVP 초장기 모델

- 언어 : Python 3.10 higher
- 패키지 의존성 관리 및 환경설정 : Poetry
- 웹 프레임워크 : FastAPI
- GraphQL 라이브러리 : Strawberry
- 테스트 라이브러리 : Pytest
- 파이썬 정적 타입 분석 : Pyright
- 오토 포매팅 : black
- DB 프레임워크 및 라이브러리 : SQLAlchemy 1.4 (async)
- DBMS : MariaDB, MongoDB(로그용 추후에 작업)


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

### Restaurant


### OpeningTime
|이름|속성|관계|설명|
|---|---|---|---|
|opening_time_id|UUID|PK|여는시간 id|
|restaurant_id|UUID|FK|식당 id|
|restaurant_opening_time_days|varchar|nullable|식당 여는 시간 날짜 (ex: Mon,Tue,Fri,Sat)|
|restaurant_opening_time|varchar|nullable|식당 여는 시간 (ex: 12:30~15:30,14:20~15:20)|
|restaurant_break_time_days|varchar|nulable|브레이크 타임 날짜(ex : Mon,Tue,Wed)|
|restaurant_break_time|time|nullable|브레이크 타임 시간(ex : 12:30~17:40/12:12~16:45)|
|openingtime_created_at|datetime|default|생성날짜|
|openingtime_updated_at|datetime|default, update|수정날짜|