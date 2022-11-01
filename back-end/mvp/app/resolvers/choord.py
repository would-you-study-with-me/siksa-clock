from pydantic import Json

from app.schemas.coords import InputGeocoding, OutputGeocoding, InputReverseGeocoding, OutputReverseGeocoding
from app.services.api_service import NcloudApi


async def geocoding(input_geocoding_data: InputGeocoding) -> OutputGeocoding:
    ncloud_geocoding = await NcloudApi().geocoding(
        query=input_geocoding_data.query,
        coordinate=input_geocoding_data.coordinate
    )
    return ncloud_geocoding.json()


async def reverse_geocoding(input_reverse_gecoding_data: InputReverseGeocoding) -> OutputReverseGeocoding:
    ncloud_reverse_geocoding = await NcloudApi().reverse_geocoding(
        x=input_reverse_gecoding_data.x,
        y=input_reverse_gecoding_data.y,
        sourcecrs=input_reverse_gecoding_data.sourcecrs,
        targetcrs=input_reverse_gecoding_data.targetcrs,
        orders=input_reverse_gecoding_data.orders,
        output=input_reverse_gecoding_data.output
    )

    return ncloud_reverse_geocoding.json()