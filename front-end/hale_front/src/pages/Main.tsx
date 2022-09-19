import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Typography from '@mui/material/Typography';
import RestaurantCard from '../components/RestaurantCard';
import { RestaurantCardInfo } from '../model/restaurant-card.interface';

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    mockRestaurants {
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
  const { loading, error, data } = useQuery<{
    mockRestaurants: RestaurantCardInfo[];
  }>(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Typography variant="h2">내 주변 식사</Typography>
      {data &&
        data.mockRestaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.restaurantId}
            name={restaurant.restaurantName}
            rate={restaurant.restaurantRate}
            category={restaurant.restaurantCategory}
            congestion={restaurant.restaurantCongestion}
          />
        ))}
    </div>
  );
};

export default Main;
