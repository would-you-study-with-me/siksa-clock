import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import { useEffect, useState, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { RestaurantListInfo } from '../../../models/restaurant.model';
import CardItem from '../../../components/card/CardItem';

import {
  AddressData,
  DEFAULT_ADDRESS_DATA,
} from '../../../models/address.model';
import { CoordsResultItem } from '../../../models/coords.model';
import Loader from '../../../components/common/Loader';
import ScrollObserverContainer from '../../../components/common/ScrollObserverContainer';

const GET_RESTAURANTS = gql`
  query Restaurants($roadName: String!, $limit: Int!, $skipNumber: Int!) {
    restaurants(
      inputData: { query: $roadName, limit: $limit, skip: $skipNumber }
    ) {
      restaurantName
      restaurantId
      restaurantDescription
      restaurantCategory
      restaurantAddress
      restaurantRate
      restaurantCongestion
      restaurantImage
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
  const [restaurantList, setRestaurantList] = useState<RestaurantListInfo[]>(
    [],
  );
  const [userLocation, setUserLocation] = useState<string>('');
  const location = useLocation();
  const addressData = location.state
    ? (location.state as AddressData)
    : DEFAULT_ADDRESS_DATA;
  const { loading, error, data, refetch } = useQuery(GET_RESTAURANTS, {
    variables: {
      roadName: addressData.roadname,
      skipNumber: 0,
      limit: 10,
    },
    onCompleted: data => {
      setRestaurantList(data.restaurants);
    },
  });

  const { refetch: LocationRefetch, networkStatus: LocationNetWorkStatus } =
    useQuery(GET_REVERSE_GEOCODING, {
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
              setUserLocation(dongName);
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
    } else {
      setUserLocation(addressData.roadname);
    }
  }, [LocationRefetch, refetch, addressData.roadname]);

  const loadMore = useCallback(async () => {
    const fetchData = await refetch({
      roadName: userLocation,
      skipNumber: restaurantList.length,
    });
    setRestaurantList([...restaurantList, ...fetchData.data.restaurants]);
  }, [refetch, restaurantList, userLocation]);

  if (loading) return <Loader />;
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
          imgsrc={item.restaurantImage.items[0].link}
        />
      </Link>
    </CardItemContainer>
  ));
  return (
    <Container>
      <Title variant="h2">내 주변 식사</Title>
      {cards.length > 0 && cards}
      {restaurantList.length > 0 && (
        <ScrollObserverContainer onIntersect={loadMore}>
          <Loader />
        </ScrollObserverContainer>
      )}
      {cards.length === 0 && <p>결과가 없어요!</p>}
    </Container>
  );
};

export default CardList;
