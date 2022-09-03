import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Typography from '@mui/material/Typography';

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    mockRestaurants {
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
  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Typography variant="h2">내 주변 식사</Typography>
    </div>
  );
};

export default Main;
