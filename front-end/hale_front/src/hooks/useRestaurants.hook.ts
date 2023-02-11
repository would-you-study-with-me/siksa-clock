import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESTAURANTS_QUERY } from 'queries/restaurants.query';
import { RestaurantCardInfo } from 'model/restaurant-card.interface';

export const useRestaurants = (address: string) => {
  const [restaurants, setRestaurants] = useState<RestaurantCardInfo[]>([]);

  const { data, loading, error, refetch } = useQuery<{
    restaurants: RestaurantCardInfo[];
  }>(GET_RESTAURANTS_QUERY, {
    variables: {
      query: address || '강남대로',
    },
  });

  useEffect(() => {
    if (!data) return;
    setRestaurants(data?.restaurants);
  });

  return {
    restaurants,
    loading,
    error,
    refetch,
  };
};
