import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RestaurantListInfo } from '../../../models/restaurant.model';
import CardItem from '../../../components/card/CardItem';

const GET_RESTAURANT = gql`
  query Query {
    mockRestaurants {
      restaurantName
      restaurantId
      restaurantDescription
      restaurantCategory
      restaurantAddress
      restaurantRate
      restaurantCongestion
    }
  }
`;

const Title = styled(Typography)`
  padding: 40px 0 16px;
`;

const Container = styled.div`
  padding: 0 16px;
`;

const CardItemContainer = styled.div`
  padding-bottom: 24px;
  &:last-of-type {
    padding-bottom: 0;
  }
`;
const CardList = () => {
  const { loading, error, data } = useQuery(GET_RESTAURANT);
  const location: { address: string } = useLocation().state as {
    address: string;
  };
  useEffect(() => {
    // TODO: 주소 검색보내는거 구현할 것
    console.log(location);
  }, [location]);
  if (loading) return <div>로딩</div>;
  const cards = data.mockRestaurants.map((item: RestaurantListInfo) => (
    <CardItemContainer key={`${item.restaurantId}-임시키`}>
      <CardItem
        rate={item.restaurantRate}
        congestion={item.restaurantCongestion}
        title={item.restaurantName}
        distance={item.distance}
        category={item.restaurantCategory}
      />
    </CardItemContainer>
  ));
  return (
    <Container>
      <Title variant="h2">내 주변 식사</Title>
      {cards}
    </Container>
  );
};

export default CardList;
