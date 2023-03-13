from sqlalchemy.orm import Session

from app.config.database import session


def get_db_session(db: Session = session):
    return db
