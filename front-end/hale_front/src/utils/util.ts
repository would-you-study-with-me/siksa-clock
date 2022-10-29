export function calculateDistance(
  currentLocation: {
    latitude: number;
    longitude: number;
  },
  targetLocation: { latitude: number; longitude: number },
) {
  const distance = Math.sqrt(
    (currentLocation.latitude - targetLocation.latitude) ** 2 +
      (currentLocation.longitude - targetLocation.longitude) ** 2,
  );
  return distance;
}
