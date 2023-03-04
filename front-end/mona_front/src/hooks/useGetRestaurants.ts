import { gql, useQuery } from '@apollo/client';
import { RestaurantListInfo } from '../models/restaurant.model';

const GET_RESTAURANTS = gql`
  query Restaurants($roadName: String!, $limit: Int!, $skipNumber: Int!) {
    restaurants(
      inputData: { query: $roadName, limit: $limit, skip: $skipNumber }
    ) {
      restaurantName
      restaurantId
      restaurantDescription
      restaurantCategory
      restaurantAddress
      restaurantRate
      restaurantCongestion
      restaurantImage
    }
  }
`;

export const useGetRestaurants = (
  roadName: string,
  callback: (data: RestaurantListInfo[]) => void,
  skipNumber = 0,
  limit = 10,
) => {
  const { loading, error, data, refetch } = useQuery(GET_RESTAURANTS, {
    variables: {
      roadName,
      skipNumber,
      limit,
    },
    onCompleted: data => {
      callback(data.restaurants);
    },
  });
  return {
    loading,
    error,
    data,
    refetch,
  };
};
