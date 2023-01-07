import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CongestionComponent from '../../../components/common/Congestion';
import StarRate from '../../../components/common/StarRate';
import {
  Congestion,
  RestaurantDetailInfo,
} from '../../../models/restaurant.model';
import SlickSlide from './SlickSlide';

const GET_RESTAURANTS_DETAIL = gql`
  query RestaurantsItem($id: UUID!) {
    restaurant(inputData: { restaurantId: $id }) {
      restaurantAddress
      restaurantBreakTime
      restaurantBreakTimeDays
      restaurantCategory
      restaurantCongestion
      restaurantContact
      restaurantDescription
      restaurantName
      restaurantOpeningTime
      restaurantOpeningTimeDays
      restaurantImage
      restaurantMenu
      restaurantRate
      restaurantX
      restaurantY
    }
  }
`;
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
const CategoryTypo = styled.p`
  font-size: 0.714rem;
  font-weight: 400;
`;
const TitleTypo = styled(Typography)`
  padding-bottom: 1rem;
`;
const DescriptionTypo = styled(Typography)`
  padding-bottom: 2rem;
`;
const RateAndCongestionContainer = styled.div`
  display: flex;
  margin-left: auto;
  padding-bottom: 1.2rem;
`;
const StyledCongestion = styled(CongestionComponent)`
  margin-left: 3.2rem;
`;
const InfoContainer = styled.div``;
const RestaurauntInfo = () => {
  const [detailInfo, setDetailInfo] = useState<RestaurantDetailInfo>();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_RESTAURANTS_DETAIL, {
    context: { clientName: 'restaurant' },
    variables: {
      id,
    },
    onCompleted: data => {
      setDetailInfo(data.restaurant);
    },
  });
  if (loading) return <div>로딩</div>;
  const imageDataURL = detailInfo?.restaurantImage.items.map(img => {
    const imgTitleSplit = img.title.split(' ');
    // TODO: title에 엉뚱한거 걸러내는 작업하기
    return img.link;
  });
  // TODO: 메뉴판 이미지 슬라이드 출력하기
  const menuImageDataURL = detailInfo?.restaurantMenu.items.map(
    img => img.link,
  );

  return (
    <div>
      <SlideContainer>
        <SlickSlide imageUrls={imageDataURL || mockImageUrls} />
      </SlideContainer>
      <InfoContainer>
        <CategoryTypo>
          {detailInfo?.restaurantCategory ?? '카테고리'}
        </CategoryTypo>
        <TitleTypo variant="h2">{detailInfo?.restaurantName}</TitleTypo>
        <RateAndCongestionContainer>
          <StarRate rate={detailInfo?.restaurantRate || 0} />
          <StyledCongestion
            congestion={detailInfo?.restaurantCongestion || Congestion.NORMAL}
          />
        </RateAndCongestionContainer>
        <DescriptionTypo>
          {detailInfo?.restaurantDescription ?? '식당설명'}
        </DescriptionTypo>
      </InfoContainer>
      <SlideContainer>
        <SlickSlide imageUrls={menuImageDataURL || mockImageUrls} />
      </SlideContainer>
      <div>지도 영역</div>
    </div>
  );
};

export default RestaurauntInfo;
