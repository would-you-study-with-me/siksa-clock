import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useMain } from 'hooks/useMain.hook';
import RestaurantCard from '../components/RestaurantCard';
import LocationHeader from '../components/LocationHeader';

const Main: React.FC = () => {
  const { restaurants, loading, error } = useMain();

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
      {restaurants?.map(restaurant => (
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
