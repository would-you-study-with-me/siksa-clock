from sqlalchemy.ext.asyncio import AsyncSession

from app.config.database import async_session


async def get_db_session() -> AsyncSession:
    sess = async_session()
    try:
        async with sess.begin() as session:
            yield session
    finally:
        await sess.close()
