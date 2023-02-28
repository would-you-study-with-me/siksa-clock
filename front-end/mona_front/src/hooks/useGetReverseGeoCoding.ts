import { gql, useQuery } from '@apollo/client';

const GET_REVERSE_GEOCODING = gql`
  query GetLocation($x: Float!, $y: Float!) {
    reverseGeocoding(inputReverseGeocoding: { x: $x, y: $y }) {
      results
    }
  }
`;

export const useGetReverseGeoCoding = (
  x: number,
  y: number,
  skipNumber = 0,
  limit = 10,
) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_REVERSE_GEOCODING,
    {
      variables: { x, y, skipNumber, limit },
      notifyOnNetworkStatusChange: true,
    },
  );
  return {
    loading,
    error,
    data,
    refetch,
    networkStatus,
  };
};
