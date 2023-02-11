import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import { useEffect, useState, useCallback, Fragment } from 'react';
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
import { useGetRestaurant } from '../../../hooks/useGetRestaurants';
import { useGetReverseGeoCoding } from '../../../hooks/useGetReverseGeoCoding';

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

const Home = () => {
  const [restaurantList, setRestaurantList] = useState<RestaurantListInfo[]>(
    [],
  );
  const [userLocation, setUserLocation] = useState<string>('');
  const location = useLocation();
  const addressData = location.state
    ? (location.state as AddressData)
    : DEFAULT_ADDRESS_DATA;
  const { loading, error, data, refetch } = useGetRestaurant(
    addressData.roadname,
    setRestaurantList,
  );

  const { refetch: locationRefetch, networkStatus: locationNetWorkStatus } =
    useGetReverseGeoCoding(127.048542, 37.519995);

  useEffect(() => {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
        (res: GeolocationPosition) => {
          locationRefetch({
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
  }, [locationRefetch, refetch, addressData.roadname]);

  const loadMore = useCallback(async () => {
    const fetchData = await refetch({
      roadName: userLocation,
      skipNumber: restaurantList.length,
    });
    setRestaurantList([...restaurantList, ...fetchData.data.restaurants]);
  }, [refetch, restaurantList, userLocation]);

  if (loading) return <Loader />;
  if (error) return <div>에러</div>;
  if (locationNetWorkStatus === NetworkStatus.refetch)
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
          imgList={item.restaurantImage.items}
        />
      </Link>
    </CardItemContainer>
  ));
  return (
    <Container>
      <Title variant="h2">내 주변 식사</Title>
      {restaurantList.length > 0 && (
        <>
          {cards}
          <ScrollObserverContainer onIntersect={loadMore}>
            <Loader />
          </ScrollObserverContainer>
        </>
      )}
      {restaurantList.length === 0 && <p>결과가 없어요!</p>}
    </Container>
  );
};

export default Home;
