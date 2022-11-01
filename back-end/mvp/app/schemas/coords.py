from typing import List, Optional

from pydantic import BaseModel
from strawberry.scalars import JSON


class InputGeocoding(BaseModel):
    query: str
    coordinate: Optional[str]


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
