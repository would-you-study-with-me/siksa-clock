import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { RestaurantCardInfo } from 'model/restaurant-card.interface';
import { Coordinate } from 'model/coordinate.interface';
import { GET_REVERSE_GEOCODING_QUERY } from '../queries/geocoding.query';
import { useRestaurants } from '../hooks/useRestaurants.hook';

type MainHookReturnType = {
  restaurants: RestaurantCardInfo[] | null;
  loading: boolean;
  error: boolean;
};

export const useMain = (): MainHookReturnType => {
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [coords, setCoords] = useState<Coordinate | undefined>(undefined);

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    restaurants,
    loading: isLoadingRestaurants,
    error: isErrorRestaurants,
  } = useRestaurants(address);

  const location = useLocation();

  const {
    loading: isLoadingGeocoding,
    error: isErrorGeocoding,
    refetch: refetchReverseGeocoding,
  } = useQuery(GET_REVERSE_GEOCODING_QUERY, {
    variables: {
      x: coords?.longitude,
      y: coords?.latitude,
    },
    skip: !coords,
  });

  const setGeolocationAddress = useCallback(() => {
    navigator.geolocation?.getCurrentPosition(
      (position: GeolocationPosition) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
    );
  }, [setCoords]);

  useEffect(() => {
    if (coords?.latitude && coords?.longitude) {
      refetchReverseGeocoding({
        x: coords.longitude,
        y: coords.latitude,
      }).then(result => {
        const dongName =
          result?.data?.reverseGeocoding?.results[0]?.region?.area3.name;
        setAddress(dongName);
      });
    }
  }, [coords, refetchReverseGeocoding]);

  useEffect(() => {
    const addressData = location.state as { roadname: string };
    if (addressData?.roadname) {
      setAddress(addressData.roadname);
    } else {
      setGeolocationAddress();
    }
  }, [location.state, setGeolocationAddress]);

  useEffect(() => {
    if (isLoadingRestaurants || isLoadingGeocoding) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (isErrorRestaurants || isErrorGeocoding) {
      setError(true);
    } else {
      setError(false);
    }
  }, [
    isLoadingRestaurants,
    isLoadingGeocoding,
    isErrorRestaurants,
    isErrorGeocoding,
  ]);

  return {
    restaurants,
    loading,
    error,
  };
};
