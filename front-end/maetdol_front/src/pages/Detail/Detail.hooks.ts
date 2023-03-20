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

type Loading = {
  restaurantDetail: undefined;
  error: undefined;
  loading: true;
};

type Error = {
  restaurantDetail: undefined;
  error: ApolloError;
  loading: false;
};

type Done = {
  restaurantDetail: RestaurantRawData;
  error: undefined;
  loading: false;
};

type UseRestaurantDetailReturn = Loading | Error | Done;

export function useRestaurantDetail(
  restaurantId: string,
): UseRestaurantDetailReturn {
  const { data, error, loading } = useQuery<
    { restaurant: RestaurantRawData },
    { restaurantId: string }
  >(GET_RESTAURANT_DETAIL, {
    variables: { restaurantId },
  });

  if (loading) {
    return {
      restaurantDetail: undefined,
      error: undefined,
      loading: true,
    };
  }

  if (error) {
    return {
      restaurantDetail: undefined,
      error,
      loading: false,
    };
  }

  if (data) {
    return {
      restaurantDetail: data.restaurant,
      error: undefined,
      loading: false,
    };
  }

  return {
    restaurantDetail: undefined,
    error: new ApolloError({
      errorMessage: '데이터가 비어있습니다! (세상에)',
    }),
    loading: false,
  };
}
