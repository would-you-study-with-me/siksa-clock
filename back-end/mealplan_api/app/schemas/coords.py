from typing import List, Optional

import strawberry
from pydantic import BaseModel
from strawberry.scalars import JSON


class InputGeocoding(BaseModel):
    query: str
    coordinate: Optional[str]
    filter: Optional[str]
    page: Optional[int]
    count: Optional[int]


class OutputGeocoding(BaseModel):
    status: str
    meta: dict
    addresses: Optional[List[dict]]
    error_message: Optional[str]


class InputReverseGeocoding(BaseModel):
    x: float
    y: float
    sourcecrs: str = 'epsg:4326'
    targetcrs: str = 'epsg:4326'
    orders: str = 'legalcode,admcode,roadaddr'
    output: str = 'json'


class OutputReverseGeocoding(BaseModel):
    status: Optional[dict]
    results: Optional[List[dict]]


class InputTransCoord(BaseModel):
    x: float
    y: float
    input_coord: str = 'TM'
    output_coord: str = 'WGS84'


class OutputTransCoord(BaseModel):
    meta: dict
    documents: dict


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
