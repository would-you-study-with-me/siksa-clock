from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_register(self):
    """
    회원가입
    회원가입을 보내고 이를 바탕으로 진행함
    """
    response = client.post(
        "/account/register",
        json={
            "email": "test@email.com",
            "password": "password",
        }
    )

    assert response.status_code == 201
    # cookie test
    secret_cookie = response.cookies['siksa_auth']`




def test_login(self):
    """
    로그인
    """
    pass


def test_logout(self):
    """
    로그아웃
    """
    pass

