from dependency_injector import containers, providers
from sqlalchemy.ext.asyncio import AsyncSession

from app.config.database import async_session


async def get_db_session() -> AsyncSession:
    sess = async_session
    try:
        yield sess
    finally:
        await sess.close()


class Container(containers.DeclarativeContainer):
    wiring_config = containers.WiringConfiguration(modules=[".endpoints"])

    config = providers.Configuration(yaml_files=["config.yaml"])


