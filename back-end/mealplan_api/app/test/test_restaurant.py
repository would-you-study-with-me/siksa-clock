import pytest
from fastapi.testclient import TestClient

from app.main import app
from app.services.restaurant import calc_congestion

client = TestClient(app)


def test_read_root():
    response = client.get('/')
    assert response.status_code == 200
    assert response.json() == {'detail': 'I love you baby!!'}
