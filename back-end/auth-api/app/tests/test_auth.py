import pytest
from httpx import AsyncClient

from app.main import app


class TestAuthClass:
    """
    회원 전용 테스트 코드
    """
    @pytest.mark.asyio
    async def test_register(self):
        input_data = {
            'mobile': '01050276384',
            'password': '해쉬암호화된패스워드',
            'nickname': '우주최강꽃미남달사',
            'device_uuid': 'uuid레요.',
            'name': '이동현'
        }

        async with AsyncClient(app=app, base_url='http://127.0.0.1') as ac:
            response = await ac.post('/register', data=None)
        assert response.status_code == 200

    @pytest.mark.asyio
    async def test_login(self):
        pass

    @pytest.mark.asyio
    async def test_forgot_password(self):
        pass

    @pytest.mark.asyio
    async def test_logout(self):
        pass

    @pytest.mark.asyio
    async def test_delete_account(self):
        pass
