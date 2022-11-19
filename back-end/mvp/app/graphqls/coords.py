import strawberry

from app.resolvers.choord import geocoding, reverse_geocoding
from app.scalars.coords import InputGeocoding, OutputGeocoding, OutputReverseGeocoding, InputReverseGeocoding


@strawberry.type(description='위경도를 사용한 모든 Ncloud API 모은 Query')
class Query:
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
