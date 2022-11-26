from typing import Optional

import strawberry
from strawberry.scalars import JSON

from app.schemas.coords import InputGeocoding, OutputGeocoding, InputReverseGeocoding, OutputReverseGeocoding


@strawberry.experimental.pydantic.input(model=InputGeocoding, all_fields=True, description='Geocoding Input 데이터타입')
class InputGeocoding:
    pass


@strawberry.experimental.pydantic.type(model=OutputGeocoding, description='Geocoding 출력')
class OutputGeocoding:
    status: str
    meta: JSON
    addresses: Optional[list[JSON]]
    error_message: Optional[str]


@strawberry.experimental.pydantic.input(model=InputReverseGeocoding, description='Reverse Geocoding Input', all_fields=True)
class InputReverseGeocoding:
    pass


@strawberry.experimental.pydantic.type(model=OutputReverseGeocoding, description='Reverse Geocoding Output')
class OutputReverseGeocoding:
    status: Optional[JSON]
    results: Optional[list[JSON]]
