import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import RestaurantCard from '../components/RestaurantCard';
import LocationHeader from '../components/LocationHeader';
import { GET_REVERSE_GEOCODING_QUERY } from '../queries/geocoding.query';
import { useRestaurants } from '../hooks/useRestaurants.hook';

const Main: React.FC = () => {
  const [address, setAddress] = useState<string | undefined>(undefined);

  const {
    restaurants: data,
    loading,
    error,
    refetch,
  } = useRestaurants(address);

  const location = useLocation();

  const { refetch: refetchReverseGeocoding } = useQuery(
    GET_REVERSE_GEOCODING_QUERY,
  );

  const setGeolocationAddress = useCallback(() => {
    navigator.geolocation?.getCurrentPosition(
      (position: GeolocationPosition) => {
        refetchReverseGeocoding({
          x: position.coords.longitude,
          y: position.coords.latitude,
        }).then(result => {
          const dongName =
            result?.data?.reverseGeocoding?.results[0]?.region?.area3.name;
          setAddress(dongName);
        });
      },
    );
  }, [refetchReverseGeocoding]);

  useEffect(() => {
    const addressData = location.state as { roadname: string };
    if (addressData && addressData.roadname) {
      setAddress(addressData.roadname);
    } else {
      setGeolocationAddress();
    }
  }, [location.state, setGeolocationAddress]);

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
        data.map(restaurant => (
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
