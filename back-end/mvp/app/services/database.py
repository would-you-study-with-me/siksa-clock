from sqlalchemy.orm import Session


class DBSessionMixin:
    def __init__(self, session: Session):
        self.db = session


class AppService(DBSessionMixin):
    pass


class AppCRUD(DBSessionMixin):
    pass
