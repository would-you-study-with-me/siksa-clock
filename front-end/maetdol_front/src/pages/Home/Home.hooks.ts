import { gql, useQuery } from '@apollo/client';
import { RestaurantThumbnailCard } from './Home.model';

const GET_RESTAURANTS_THUMBNAIL_CARDS = gql`
  query getRestaurantsThumbnailCards($address: String!) {
    restaurants(inputData: { query: $address }) {
      restaurantCategory
      restaurantId
      restaurantCongestion
      restaurantRate
      restaurantName
      # distance ?
      # thumbnail ?
    }
  }
`;

export function useRestaurantsThumbnailCard(address: string) {
  const { data, error, loading } = useQuery<
    RestaurantThumbnailCard[],
    { address: string }
  >(GET_RESTAURANTS_THUMBNAIL_CARDS, { variables: { address } });

  return {
    thumbnailCards: data ?? [],
    error,
    loading,
  };
}
