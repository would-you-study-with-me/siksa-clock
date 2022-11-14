import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import RestaurantCard from '../components/RestaurantCard';
import { RestaurantCardInfo } from '../model/restaurant-card.interface';
import { calculateDistance } from '../utils/util';
import { Coordinate } from '../model/coordinate.interface';
import LocationHeader from '../components/LocationHeader';

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      restaurantId
      restaurantName
      restaurantRate
      restaurantCategory
      restaurantCongestion
      restaurantX
      restaurantY
    }
  }
`;

const Main: React.FC = () => {
  const [currentCoords, setCurrentCoords] = useState<Coordinate>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (position: GeolocationPosition) => {
        console.dir(position.coords);
        setCurrentCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        console.error(error);
      },
    );
  }, []);

  const { loading, error, data } = useQuery<{
    mockRestaurants: RestaurantCardInfo[];
  }>(GET_RESTAURANTS);
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
        data.mockRestaurants.map(restaurant => (
          <NavLink to={`restaurants/${restaurant.restaurantId}`}>
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
