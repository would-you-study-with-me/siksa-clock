import React, { useState, useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import RestaurantCard from '../components/RestaurantCard';
import { RestaurantCardInfo } from '../model/restaurant-card.interface';
import LocationHeader from '../components/LocationHeader';
import { GET_RESTAURANTS_QUERY } from '../queries/restaurants.query';
import { GET_REVERSE_GEOCODING_QUERY } from '../queries/geocoding.query';

const Main: React.FC = () => {
  const [roadName, setRoadName] = useState<string | undefined>(undefined);
  const [dongName, setDongName] = useState<string | undefined>(undefined);

  const location = useLocation();
  useEffect(() => {
    const addressData = location.state as { roadname: string };
    if (addressData && addressData.roadname) {
      setRoadName(addressData.roadname);
    }
  }, [location.state]);

  const { refetch: refetchReverseGeocoding } = useQuery(
    GET_REVERSE_GEOCODING_QUERY,
  );

  const {
    loading,
    error,
    data,
    refetch: refetchRestaurant,
  } = useQuery<{
    restaurants: RestaurantCardInfo[];
  }>(GET_RESTAURANTS_QUERY, {
    variables: {
      query: roadName || dongName || '강남대로',
    },
  });

  useEffect(() => {
    if (!roadName) {
      navigator.geolocation?.getCurrentPosition(
        (position: GeolocationPosition) => {
          refetchReverseGeocoding({
            x: position.coords.longitude,
            y: position.coords.latitude,
          }).then(result => {
            const dongName =
              result?.data?.reverseGeocoding?.results[0]?.region?.area3.name;
            setDongName(dongName);
            refetchRestaurant({
              query: dongName,
            });
          });
        },
      );
    }
  }, [roadName, refetchReverseGeocoding, refetchRestaurant]);

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
