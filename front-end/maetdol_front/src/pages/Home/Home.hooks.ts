import { gql, useQuery } from '@apollo/client';
import { RestaurantRawData } from './Home.model';
import { rawThumbnailDataToThumbnail } from './Home.utils';

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
    { restaurants: RestaurantRawData[] },
    { address: string }
  >(GET_RESTAURANTS_THUMBNAIL_CARDS, { variables: { address } });

  return {
    thumbnailCards: (data?.restaurants ?? []).map(rawThumbnailDataToThumbnail),
    error,
    loading,
  };
}
