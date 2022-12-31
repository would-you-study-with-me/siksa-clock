import React, { useState, useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Typography from '@mui/material/Typography';
import RestaurantCard from '../components/RestaurantCard';
import { RestaurantCardInfo } from '../model/restaurant-card.interface';
import { calculateDistance } from '../utils/util';
import { Coordinate } from '../model/coordinate.interface';
import LocationHeader from '../components/LocationHeader';

const GET_RESTAURANTS_QUERY = gql`
  query GetRestaurants {
    restaurants(inputData: { query: "강남대로" }) {
      restaurantOpeningTimeDays
      restaurantOpeningTime
      restaurantBreakTimeDays
      restaurantBreakTime
      restaurantCategory
      restaurantCountSeats
      restaurantX
      restaurantY
      restaurantAddress
      restaurantDescription
      restaurantContact
      restaurantDistance
      restaurantCongestion
      restaurantCreatedAt
      restaurantId
      restaurantImage
      restaurantMenu
      restaurantName
      restaurantRate
      restaurantWaitingPeople
    }
  }
`;

const Main: React.FC = () => {
  const location = useLocation();
  const state = location.state as { roadname: string };

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [restaurants, setRestaurants] = useState([]);

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

  // const query = GET_RESTAURANTS_QUERY(state ? state.roadname : '강남대로');

  const { loading, error, data } = useQuery<{
    restaurants: RestaurantCardInfo[];
  }>(GET_RESTAURANTS_QUERY, {
    variables: { query: '강남대로' },
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
