import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

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
      <div>메인 사진 영역(슬라이드)</div>
      <div>타이틀과 정보 영역</div>
      <div>메뉴 슬라이드</div>
      <div>지도 영역</div>
    </div>
  );
};

export default RestaurauntInfo;
