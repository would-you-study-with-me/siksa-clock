import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useMain } from 'hooks/useMain.hook';
import styled from '@emotion/styled';
import RestaurantCard from '../components/RestaurantCard';
import LocationHeader from '../components/LocationHeader';

const TitleContainer = styled.div`
  margin-top: 40px;
  margin-left: 16px;
  margin-bottom: 16px;
`;

const Main: React.FC = () => {
  const { restaurants, loading, error } = useMain();

  if (loading)
    return (
      <div>
        <Link to="postcode" style={{ textDecoration: 'none' }}>
          <LocationHeader />
        </Link>
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div>
        <Link to="postcode" style={{ textDecoration: 'none' }}>
          <LocationHeader />
        </Link>
        <p>Error :(</p>
      </div>
    );
  return (
    <div>
      <Link to="postcode" style={{ textDecoration: 'none' }}>
        <LocationHeader />
      </Link>
      <TitleContainer>
        <Typography variant="h2">내 주변 식사</Typography>
      </TitleContainer>
      {restaurants?.map(restaurant => (
        <NavLink
          to={`restaurants/${restaurant.restaurantId}`}
          key={restaurant.restaurantId}
          style={{ textDecoration: 'none' }}
        >
          <RestaurantCard
            key={restaurant.restaurantId}
            name={restaurant.restaurantName}
            rate={restaurant.restaurantRate}
            category={restaurant.restaurantCategory}
            congestion={restaurant.restaurantCongestion}
            image={restaurant.restaurantImage}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Main;
