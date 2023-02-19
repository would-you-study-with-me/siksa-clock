from typing import List

import strawberry

from app.resolvers.choord import geocoding, reverse_geocoding
from app.scalars.coords import InputGeocoding, OutputGeocoding, OutputReverseGeocoding, InputReverseGeocoding
from app.resolvers.restaurant import get_restaurant, get_restaurants
from app.scalars.restaurant import OutputRestaurant, InputRestaurant, InputRestaurants


@strawberry.type(description="째깍식사 레스토랑 데이터 가져오기 및 레스토랑 API")
class Query:
    @strawberry.field(description="레스토랑 하나의 데이터만 가져오는 쿼리")
    async def restaurant(self, input_data: InputRestaurant) -> OutputRestaurant:
        restaurant_data = await get_restaurant(restaurant_input_data=input_data)
        return restaurant_data

    @strawberry.field(description="레스토랑 전체 데이터를 가져오는 쿼리")
    async def restaurants(self, input_data: InputRestaurants) -> List[OutputRestaurant]:
        restaurant_data = await get_restaurants(restaurants_input_data=input_data)
        return restaurant_data

    @strawberry.field
    async def geocoding(self, input_geocoding: InputGeocoding) -> OutputGeocoding:
        geocoding_data = await geocoding(input_geocoding_data=input_geocoding)
        output_geocoding_scalar_data = OutputGeocoding(
            status=geocoding_data['status'],
            meta=geocoding_data['meta'],
            addresses=geocoding_data['addresses'],
            error_message=geocoding_data['errorMessage']
        )
        return output_geocoding_scalar_data

    @strawberry.field
    async def reverse_geocoding(self, input_reverse_geocoding: InputReverseGeocoding) -> OutputReverseGeocoding:
        reverse_geocoding_data = await reverse_geocoding(input_reverse_gecoding_data=input_reverse_geocoding)
        output_reverse_geocoding_scalar_data = OutputReverseGeocoding(
            status=reverse_geocoding_data['status'],
            results=reverse_geocoding_data['results']
        )
        return output_reverse_geocoding_scalar_data
