import { gql } from '@apollo/client';

export const GET_REVERSE_GEOCODING_QUERY = gql`
  query GetLocation($x: Float!, $y: Float!) {
    reverseGeocoding(inputReverseGeocoding: { x: $x, y: $y }) {
      results
    }
  }
`;
