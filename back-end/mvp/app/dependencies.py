from app.config.database import session


def get_db_session(sql: str):
    session.scalars(sql)

