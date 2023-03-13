from app.services.api_service import KakaoApi


class TestKakaoApi:
    def __init__(self):
        self.kakao_api = KakaoApi()

    def test_coord_to_address(self):
        x, y = 37.5303, 126.9969 # 보광동 헬카페

        address_json = self.kakao_api.coord_to_address(
            x=x,
            y=y
        )

        print(address_json.json())
        assert address_json.status_code == 200


