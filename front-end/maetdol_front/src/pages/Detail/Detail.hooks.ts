import { ApolloError, gql, useQuery } from '@apollo/client';
import { RestaurantRawData } from '../Home/Home.model';

const GET_RESTAURANT_DETAIL = gql`
  query getRestaurantDetail($restaurantId: UUID!) {
    restaurant(inputData: { restaurantId: $restaurantId }) {
      restaurantImage
      restaurantCategory
      restaurantName
      restaurantRate
      restaurantCongestion
      restaurantContact
      restaurantOpeningTime
      restaurantDescription
      restaurantMenu
      restaurantX
      restaurantY
      restaurantDistance
    }
  }
`;

export function useRestaurantDetail(restaurantId: string): {
  restaurantDetail: RestaurantRawData | undefined;
  error: ApolloError | undefined;
  loading: boolean;
} {
  const { data, error, loading } = useQuery<
    { restaurant: RestaurantRawData },
    { restaurantId: string }
  >(GET_RESTAURANT_DETAIL, {
    variables: { restaurantId },
  });

  return { restaurantDetail: data?.restaurant, error, loading };
}
