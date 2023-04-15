from app.schemas.coords import InputTransCoord, OutputTransCoord
from app.services.api_service import KakaoApi


class CoordService:
    def __init__(self):
        self.kakao_api = KakaoApi()

    def trans_coord(self, input_trans_coord: InputTransCoord) -> OutputTransCoord:
        trans_data = self.kakao_api.trans_coord(input_trans_coord.dict(exclude_unset=True))
        return trans_data.json()

