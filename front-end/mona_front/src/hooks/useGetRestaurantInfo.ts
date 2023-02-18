import { gql, useQuery } from '@apollo/client';
import { RestaurantDetailInfo } from '../models/restaurant.model';

const GET_RESTAURANTS_DETAIL = gql`
  query RestaurantsItem($id: UUID!) {
    restaurant(inputData: { restaurantId: $id }) {
      restaurantAddress
      restaurantBreakTime
      restaurantBreakTimeDays
      restaurantCategory
      restaurantCongestion
      restaurantContact
      restaurantDescription
      restaurantName
      restaurantOpeningTime
      restaurantOpeningTimeDays
      restaurantImage
      restaurantMenu
      restaurantRate
      restaurantX
      restaurantY
    }
  }
`;

export const useGetRestaurantInfo = (
  id: string,
  callback: (data: RestaurantDetailInfo) => void,
) => {
  const { loading, error, data } = useQuery(GET_RESTAURANTS_DETAIL, {
    variables: {
      id,
    },
    onCompleted: data => {
      callback(data.restaurant);
    },
  });
  return {
    loading,
    error,
    data,
  };
};
