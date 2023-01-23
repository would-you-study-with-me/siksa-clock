import React, { useState, useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import RestaurantCard from '../components/RestaurantCard';
import { RestaurantCardInfo } from '../model/restaurant-card.interface';
import { Coordinate } from '../model/coordinate.interface';
import LocationHeader from '../components/LocationHeader';
import { GET_RESTAURANTS_QUERY } from '../queries/restaurants.query';
import { GET_REVERSE_GEOCODING_QUERY } from '../queries/geocoding.query';

const Main: React.FC = () => {
  // 다음 주소검색 결과값으로 받아온 도로명주소
  const [addressBySearch, setAddressBySearch] = useState<{
    roadname: string | null;
  }>({
    roadname: null,
  });

  const location = useLocation();
  useEffect(() => {
    const addressData = location.state as { roadname: string };
    setAddressBySearch(addressData);
  }, [location.state, addressBySearch]);

  const { refetch } = useQuery(GET_REVERSE_GEOCODING_QUERY, {
    variables: {
      x: 127.048542,
      y: 37.519995,
    },
  });

  useEffect(() => {
    if (addressBySearch?.roadname) return;
    navigator.geolocation?.getCurrentPosition(
      (position: GeolocationPosition) => {
        refetch({
          x: position.coords.longitude,
          y: position.coords.latitude,
        }).then(result => {
          const dongName =
            result?.data?.reverseGeocoding?.results[0]?.region?.area3.name;
          // 여기서 레스토랑 refetch
        });
      },
      error => {
        console.error(error);
      },
    );
  }, [addressBySearch, refetch]);

  const { loading, error, data } = useQuery<{
    restaurants: RestaurantCardInfo[];
  }>(GET_RESTAURANTS_QUERY, {
    variables: {
      query: addressBySearch ? addressBySearch.roadname : '강남대로',
    },
  });
  if (loading)
    return (
      <div>
        <Link to="postcode">
          <LocationHeader />
        </Link>
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div>
        <Link to="postcode">
          <LocationHeader />
        </Link>
        <p>Error :(</p>
      </div>
    );

  return (
    <div>
      <Link to="postcode">
        <LocationHeader />
      </Link>
      <Typography variant="h2">내 주변 식사</Typography>
      {data &&
        data.restaurants.map(restaurant => (
          <NavLink
            to={`restaurants/${restaurant.restaurantId}`}
            key={restaurant.restaurantId}
          >
            <RestaurantCard
              key={restaurant.restaurantId}
              name={restaurant.restaurantName}
              rate={restaurant.restaurantRate}
              category={restaurant.restaurantCategory}
              congestion={restaurant.restaurantCongestion}
            />
          </NavLink>
        ))}
    </div>
  );
};

export default Main;
