from typing import List, Optional

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