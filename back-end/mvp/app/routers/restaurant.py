from datetime import datetime
from typing import List, Dict

import strawberry

from strawberry.fastapi import GraphQLRouter

from app.schemas.restaurant import RestaurantAll


@strawberry.type
class Query:

    @strawberry.field
    async def hello(self) -> str:
        return "Hello, world!"

    @strawberry.field
    def mock_restaurant(self) -> RestaurantAll:
        mock_data = RestaurantAll(
            restaurant_id='147608b5-9e46-45e1-b947-989150ddd76b',
            opening_time_id='147608b5-9e46-45e1-b947-989150ddd76b',
            restaurant_name='헤일분식점',
            restaurant_rate=5,
            restaurant_category='분식집',
            restaurant_count_seats='250',
            restaurant_x='412283.456788662',
            restaurant_y='229268.903702646',
            restaurant_address='울산광역시 남구 화합로178번길 20, 2층 (삼산동)',
            restaurant_description='울산에 놀러가다가 분식집 차리고 싶어서 차림',
            restaurant_contact='01000000000',
            restaurant_opening_time_days='Wed, Fri',
            restaurant_opening_time='12:30~14:30',
            restaurant_break_time_days=None,
            restaurant_break_time=None,
            restaurant_congestion='crowded',
            restaurant_created_at=datetime.utcnow(),
            restaurant_updated_at=datetime.utcnow(),
            opening_time_created_at=datetime.utcnow(),
            opening_time_updated_at=datetime.utcnow(),
        )
        return mock_data

    @strawberry.field
    def mock_restaurants(self) -> List[RestaurantAll]:
        mock_data_1 = RestaurantAll(
            restaurant_id='c175bcc4-0660-4f5d-ac48-9c41b3f78c30',
            opening_time_id='c175bcc4-0660-4f5d-ac48-9c41b3f78c30',
            restaurant_name='헤일분식점',
            restaurant_rate=5,
            restaurant_category='분식집',
            restaurant_count_seats='250',
            restaurant_x='412283.456788662',
            restaurant_y='229268.903702646',
            restaurant_address='울산광역시 남구 화합로178번길 20, 2층 (삼산동)',
            restaurant_description='울산에 놀러가다가 분식집 차리고 싶어서 차림',
            restaurant_contact='01000000000',
            restaurant_opening_time_days='Wed, Fri',
            restaurant_opening_time='12:30~14:30',
            restaurant_break_time_days=None,
            restaurant_break_time=None,
            restaurant_congestion='crowded',
            restaurant_created_at=datetime.utcnow(),
            restaurant_updated_at=datetime.utcnow(),
            opening_time_created_at=datetime.utcnow(),
            opening_time_updated_at=datetime.utcnow(),
        )

        mock_data_2 = RestaurantAll(
            restaurant_id='147608b5-9e46-45e1-b947-989150ddd76b',
            opening_time_id='147608b5-9e46-45e1-b947-989150ddd76b',
            restaurant_name='모나돈까스',
            restaurant_rate=4,
            restaurant_category='분식집',
            restaurant_count_seats='100',
            restaurant_x='412283.46678',
            restaurant_y='229268.92370',
            restaurant_address='서울특별시 강남구 강남대로 126길 74 203호',
            restaurant_description='서을특별시 빌라같아 보이는 인스타 숨은 맛집',
            restaurant_contact='01000000000',
            restaurant_opening_time_days='Wed, Fri',
            restaurant_opening_time='12:30~14:30',
            restaurant_break_time_days=None,
            restaurant_break_time=None,
            restaurant_congestion='normal',
            restaurant_created_at=datetime.utcnow(),
            restaurant_updated_at=datetime.utcnow(),
            opening_time_created_at=datetime.utcnow(),
            opening_time_updated_at=datetime.utcnow(),
        )

        mock_data_3 = RestaurantAll(
            restaurant_id='aad4083e-3837-4f03-bcf7-47ec5efa9aa8',
            opening_time_id='aad4083e-3837-4f03-bcf7-47ec5efa9aa8',
            restaurant_name='맷돌로구운고기집',
            restaurant_rate=3,
            restaurant_category='한식집',
            restaurant_count_seats='500',
            restaurant_x='412283.44678',
            restaurant_y='229268.93370',
            restaurant_address='경상남도 창원시 화합로 125길 40',
            restaurant_description='창원시 특산물 맷돌로 구운 고기',
            restaurant_contact='01000000000',
            restaurant_opening_time_days='Wed, Fri',
            restaurant_opening_time='12:30~14:30',
            restaurant_break_time_days=None,
            restaurant_break_time=None,
            restaurant_congestion='smooth',
            restaurant_created_at=datetime.utcnow(),
            restaurant_updated_at=datetime.utcnow(),
            opening_time_created_at=datetime.utcnow(),
            opening_time_updated_at=datetime.utcnow(),
        )

        mock_data_4 = RestaurantAll(
            restaurant_id='76861537-6a1c-4175-814d-a1423bf5ba49',
            opening_time_id='76861537-6a1c-4175-814d-a1423bf5ba49',
            restaurant_name='달사막걸리',
            restaurant_rate=2,
            restaurant_category='유흥주점',
            restaurant_count_seats='1000',
            restaurant_x='412283.44578',
            restaurant_y='229268.93570',
            restaurant_address='부산광역시 금정구 장전동 장전동 수림로 66번길 64',
            restaurant_description='장전동 명물',
            restaurant_contact='01000000000',
            restaurant_opening_time_days='Wed, Fri',
            restaurant_opening_time='12:30~14:30',
            restaurant_break_time_days=None,
            restaurant_break_time=None,
            restaurant_congestion='smooth',
            restaurant_created_at=datetime.utcnow(),
            restaurant_updated_at=datetime.utcnow(),
            opening_time_created_at=datetime.utcnow(),
            opening_time_updated_at=datetime.utcnow(),
        )
        return [mock_data_1, mock_data_2, mock_data_3, mock_data_4]


schema = strawberry.Schema(
    query=Query
)

restaurant_graphql_app = GraphQLRouter(
    schema=schema,
    graphiql=True,
)
