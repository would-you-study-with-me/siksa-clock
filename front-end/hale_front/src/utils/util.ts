import { Coordinate } from '../model/coordinate.interface';

export function calculateDistance(
  currentLocation: Coordinate,
  targetLocation: Coordinate,
) {
  const distance = Math.sqrt(
    (currentLocation.latitude - targetLocation.latitude) ** 2 +
      (currentLocation.longitude - targetLocation.longitude) ** 2,
  );
  return distance;
}
