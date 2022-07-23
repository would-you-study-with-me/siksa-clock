from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')



def create_access_token():
    pass


def create_refresh_token():
    pass


def check_refresh_token():
    pass

