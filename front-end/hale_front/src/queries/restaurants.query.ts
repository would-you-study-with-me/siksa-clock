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

export const GET_RESTAURANT_QUERY = gql`
  query GetRestaurant($query: String!) {
    restaurant(inputData: { restaurantId: $query }) {
      restaurantAddress
      restaurantBreakTime
      restaurantBreakTimeDays
      restaurantCategory
      restaurantContact
      restaurantCongestion
      restaurantCountSeats
      restaurantCreatedAt
      restaurantDescription
      restaurantDistance
      restaurantId
      restaurantImage
      restaurantMenu
      restaurantName
      restaurantOpeningTime
      restaurantOpeningTimeDays
      restaurantRate
      restaurantUpdatedAt
      restaurantWaitingPeople
      restaurantX
      restaurantY
    }
  }
`;
