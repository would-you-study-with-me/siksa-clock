from uuid import UUID

import strawberry
from strawberry.types import Info

from app.scalars.restaurant import RestaurantAll


@strawberry.type
class Query:
    @strawberry.field
    async def restaurant(self, info: Info) -> RestaurantAll:

        return RestaurantAll()

