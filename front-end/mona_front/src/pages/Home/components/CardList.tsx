import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Congestion,
  RestaurantListInfo,
} from '../../../models/restaurant.model';
import CardItem from '../../../components/card/CardItem';

import {
  AddressData,
  DEFAULT_ADDRESS_DATA,
} from '../../../models/address.model';
import { CoordsResultItem } from '../../../models/coords.model';

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
  query GetLocation($x: Float!, $y: Float!) {
    reverseGeocoding(inputReverseGeocoding: { x: $x, y: $y }) {
      results
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

const findLand = (coordItems: CoordsResultItem[]) => {
  return coordItems.find(item => item.land);
};

const CardList = () => {
  const [restaurantList, setRestaurantList] = useState<RestaurantListInfo[]>([
    {
      restaurantName: '',
      restaurantId: '',
      restaurantCategory: '',
      restaurantRate: 3,
      restaurantCongestion: Congestion.CROWDED,
      distance: 999,
    },
  ]);
  const location = useLocation();
  const addressData = location.state
    ? (location.state as AddressData)
    : DEFAULT_ADDRESS_DATA;
  const { loading, error, data, refetch } = useQuery(GET_RESTAURANTS, {
    context: { clientName: 'restaurant' },
    variables: {
      roadName: addressData.roadname,
    },
    onCompleted: data => {
      setRestaurantList(data.restaurants);
    },
  });

  const { refetch: LocationRefetch, networkStatus: LocationNetWorkStatus } =
    useQuery(GET_REVERSE_GEOCODING, {
      context: { clientName: 'coords' },
      variables: {
        x: 127.048542,
        y: 37.519995,
      },
      notifyOnNetworkStatusChange: true,
    });

  useEffect(() => {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
        (res: GeolocationPosition) => {
          LocationRefetch({
            x: res.coords.longitude,
            y: res.coords.latitude,
          }).then(res => {
            const geoLocationData: CoordsResultItem[] =
              res.data.reverseGeocoding.results;
            const locationDataWithLand = findLand(geoLocationData);
            const dongName = locationDataWithLand?.region?.area3?.name;
            if (dongName) {
              // refetch 할 때 loading표시하기
              refetch({
                roadName: dongName,
              }).then(res => {
                setRestaurantList(res.data.restaurants);
              });
            }
          });
        },
        err => {
          console.warn(err.message);
        },
      );
    }
  }, [LocationRefetch, refetch]);

  if (loading) return <div>로딩</div>;
  if (error) return <div>에러</div>;
  if (LocationNetWorkStatus === NetworkStatus.refetch)
    return <div>refectch</div>;
  const cards = restaurantList.map((item: RestaurantListInfo) => (
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
