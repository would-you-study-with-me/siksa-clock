import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
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
const RestaurauntInfo = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_RESTAURANTS_DETAIL, {
    variables: {
      id,
    },
  });
  if (loading) return <div>로딩</div>;
  return (
    <div>
      <SlideContainer>
        <SlickSlide imageUrls={mockImageUrls} />
      </SlideContainer>
      <div>타이틀과 정보 영역</div>
      <div>메뉴 슬라이드</div>
      <div>지도 영역</div>
    </div>
  );
};

export default RestaurauntInfo;
