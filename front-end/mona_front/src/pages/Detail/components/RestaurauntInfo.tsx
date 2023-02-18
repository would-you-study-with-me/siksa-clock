import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import CongestionComponent from '../../../components/common/Congestion';
import StarRate from '../../../components/common/StarRate';
import {
  Congestion,
  RestaurantDetailInfo,
} from '../../../models/restaurant.model';
import SlickSlide from './SlickSlide';
import { useGetRestaurantInfo } from '../../../hooks/useGetRestaurantInfo';
import { KAKAO_MAP_KEY } from '../../../assets/const/kakaoKey';

const mockImageUrls = [
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80',
  'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
];

const SlideContainer = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
`;
const CategoryTypo = styled(Typography)`
  font-weight: 400;
`;
const TitleTypo = styled(Typography)`
  padding-bottom: 16px;
`;
const DescriptionTypo = styled(Typography)`
  padding: 24px 0 40px;
`;

const RateAndCongestionContainer = styled.div`
  display: flex;
  margin-left: auto;
  padding-bottom: 12px;
`;
const StyledCongestion = styled(CongestionComponent)`
  padding-left: 32px;
`;
const InfoContainer = styled.div`
  padding: 24px 16px;
`;
const ContactAndOpeningContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MapContainer = styled.div`
  padding: 24px 0;
`;

const MapContents = styled.div`
  width: 100%;
  min-height: 300px;
`;
const RestaurauntInfo = () => {
  const [detailInfo, setDetailInfo] = useState<RestaurantDetailInfo>();
  const [kakaoMap, setKaKaoMap] = useState<typeof kakao>();
  const { id } = useParams();
  const { loading, error, data } = useGetRestaurantInfo(
    id ?? '',
    setDetailInfo,
  );
  const mapContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`;
    document.body.appendChild(kakaoMapScript);
    kakaoMapScript.onload = () =>
      window.kakao.maps.load(() => {
        setKaKaoMap(window.kakao);
      });
  }, [setKaKaoMap]);

  const imageDataURL = detailInfo?.restaurantImage.items.map(img => img.link);
  const menuImageDataURL = detailInfo?.restaurantMenu.items.map(
    img => img.link,
  );

  const makeKaKaoMap = () => {
    if (kakaoMap && mapContainer.current) {
      const option: kakao.maps.MapOptions = {
        center: new kakaoMap.maps.LatLng(
          detailInfo?.restaurantY ?? 33.450701,
          detailInfo?.restaurantX ?? 126.570667,
        ),
        level: 3, // 지도의 레벨(확대, 축소 정도)
      };
      const map = new kakaoMap.maps.Map(mapContainer.current, option);
      const markerPosition = new kakaoMap.maps.LatLng(
        detailInfo?.restaurantY ?? 33.450701,
        detailInfo?.restaurantX ?? 126.570667,
      );

      // 마커를 생성합니다
      const marker = new kakaoMap.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    }
  };

  useEffect(() => {
    makeKaKaoMap();
  });

  if (loading) return <div>로딩</div>;
  return (
    <div>
      <SlideContainer>
        <SlickSlide imageUrls={imageDataURL || mockImageUrls} />
      </SlideContainer>
      <InfoContainer>
        <CategoryTypo variant="caption">
          {detailInfo?.restaurantCategory ?? '카테고리'}
        </CategoryTypo>
        <TitleTypo variant="h2">{detailInfo?.restaurantName}</TitleTypo>
        <RateAndCongestionContainer>
          <StarRate rate={detailInfo?.restaurantRate || 0} />
          <StyledCongestion
            congestion={detailInfo?.restaurantCongestion || Congestion.NORMAL}
          />
        </RateAndCongestionContainer>
        <ContactAndOpeningContainer>
          <Typography variant="body2">
            {detailInfo?.restaurantContact || '000-0000-0000'}
          </Typography>
          <Typography variant="body2">
            {detailInfo?.restaurantOpeningTime || '영업시간'}
          </Typography>
        </ContactAndOpeningContainer>
        <DescriptionTypo>
          {detailInfo?.restaurantDescription ?? '식당설명'}
        </DescriptionTypo>
        <TitleTypo variant="h2">메뉴</TitleTypo>
        {menuImageDataURL && menuImageDataURL?.length > 0 && (
          <SlideContainer>
            <SlickSlide imageUrls={menuImageDataURL || mockImageUrls} />
          </SlideContainer>
        )}
        <MapContainer>
          <TitleTypo variant="h2">지도</TitleTypo>
          <MapContents ref={mapContainer} />
        </MapContainer>
      </InfoContainer>
    </div>
  );
};

export default RestaurauntInfo;
