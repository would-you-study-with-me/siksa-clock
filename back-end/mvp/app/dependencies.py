from app.config.database import session


def get_db_session():
    try:
        yield session
    finally:
        session.close()
