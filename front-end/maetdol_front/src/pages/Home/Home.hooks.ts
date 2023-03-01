import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { RestaurantRawData } from './Home.model';
import { rawThumbnailDataToThumbnail } from './Home.utils';

const GET_RESTAURANTS_THUMBNAIL_CARDS = gql`
  query getRestaurantsThumbnailCards(
    $address: String!
    $skip: Int!
    $limit: Int! = 10
  ) {
    restaurants(inputData: { query: $address, skip: $skip, limit: $limit }) {
      restaurantCategory
      restaurantId
      restaurantCongestion
      restaurantRate
      restaurantName
      restaurantImage
      # distance ?
    }
  }
`;

export function useRestaurantsThumbnailCard(address: string) {
  const [cards, setCards] = useState<RestaurantRawData[]>([]);
  const [offset, setOffset] = useState(0);

  const { data, error, loading } = useQuery<
    { restaurants: RestaurantRawData[] },
    { address: string; skip: number }
  >(GET_RESTAURANTS_THUMBNAIL_CARDS, {
    variables: { address, skip: offset },
    skip: address.length === 0,
  });

  useEffect(() => {
    if (!data?.restaurants.length) return;

    setCards(p => p.concat(data?.restaurants));
  }, [data?.restaurants]);

  return {
    thumbnailCards: cards.map(rawThumbnailDataToThumbnail),
    error,
    loading,
    loadMore: () => setOffset(cards.length),
  };
}
