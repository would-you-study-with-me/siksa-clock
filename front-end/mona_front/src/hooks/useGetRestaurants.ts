import { gql, useQuery } from '@apollo/client';

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

const GET_REVERSE_GEOCODING = gql`
  query GetLocation($x: Float!, $y: Float!) {
    reverseGeocoding(inputReverseGeocoding: { x: $x, y: $y }) {
      results
    }
  }
`;

export const useGetRestaurant = (
  roadName: string,
  callback: (data: any) => void,
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
