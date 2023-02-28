import { gql } from '@apollo/client';

export const GET_RESTAURANTS_QUERY = gql`
  query GetRestaurants($query: String!) {
    restaurants(inputData: { query: $query }) {
      restaurantOpeningTimeDays
      restaurantOpeningTime
      restaurantBreakTimeDays
      restaurantBreakTime
      restaurantCategory
      restaurantCountSeats
      restaurantX
      restaurantY
      restaurantAddress
      restaurantDescription
      restaurantContact
      restaurantDistance
      restaurantCongestion
      restaurantCreatedAt
      restaurantId
      restaurantImage
      restaurantMenu
      restaurantName
      restaurantRate
      restaurantWaitingPeople
    }
  }
`;
