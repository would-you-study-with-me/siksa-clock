import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { RestaurantListInfo } from '../../../models/restaurant.model';
import CardItem from '../../../components/card/CardItem';

import {
  AddressData,
  DEFAULT_ADDRESS_DATA,
} from '../../../models/address.model';

const GET_RESTAURANTS = gql`
  query Restaurants($roadName: String!) {
    restaurants(inputData: { query: $roadName, limit: 10 }) {
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
const GET_REVERSE_GEOCODING = gql`
  query GetLocation {
    reverseGeocoding(inputReverseGeocoding: { x: $x, y: $y })
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
  const location = useLocation();
  const addressData = location.state
    ? (location.state as AddressData)
    : DEFAULT_ADDRESS_DATA;
  const { loading, error, data } = useQuery(GET_RESTAURANTS, {
    context: { clientName: 'restaurant' },
    variables: {
      roadName: addressData.roadname,
    },
  });

  const [coordinate, setCoordinate] = useState<{ x: number; y: number }>({
    x: NaN,
    y: NaN,
  });
  const {
    loading: LocationLoading,
    error: LocationError,
    data: LocationData,
    refetch: LocationRefetch,
    networkStatus: LocationNetWorkStatus,
  } = useQuery(GET_REVERSE_GEOCODING, {
    context: { clientName: 'coords' },
    variables: {
      x: coordinate.x,
      y: coordinate.y,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
        (res: GeolocationPosition) => {
          // y위도(latitude) x경도(longitude)
          setCoordinate({
            x: res.coords.longitude,
            y: res.coords.latitude,
          });
          LocationRefetch({ x: res.coords.longitude, y: res.coords.latitude });
        },
        err => {
          console.warn(err.message);
        },
      );
    }
  }, [LocationRefetch]);

  useEffect(() => {
    if (!loading) {
      console.log('coordinate', coordinate);
      console.log(LocationData);
    }
  });

  if (loading) return <div>로딩</div>;
  if (error) return <div>에러</div>;
  if (LocationNetWorkStatus === NetworkStatus.refetch)
    return <div>refectch</div>;
  const cards = data.restaurants.map((item: RestaurantListInfo) => (
    <CardItemContainer key={`${item.restaurantId}-${item.restaurantName}`}>
      <Link to={`/detail/${item.restaurantId}`}>
        <CardItem
          rate={item.restaurantRate}
          congestion={item.restaurantCongestion}
          title={item.restaurantName}
          distance={item.distance}
          category={item.restaurantCategory}
        />
      </Link>
    </CardItemContainer>
  ));
  return (
    <Container>
      <Title variant="h2">내 주변 식사</Title>
      {cards.length > 0 && cards}
      {cards.length === 0 && <p>결과가 없어요!</p>}
    </Container>
  );
};

export default CardList;