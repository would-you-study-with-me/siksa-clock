import { Congestion } from 'components/ThumbnailCard/ThumbnailCard.model';
import { RestaurantRawData, RestaurantThumbnailCard } from './Home.model';

export function rawThumbnailDataToThumbnail({
  restaurantCategory,
  restaurantCongestion,
  restaurantId,
  restaurantName,
  restaurantRate,
  restaurantImage,
}: RestaurantRawData): RestaurantThumbnailCard {
  return {
    category: restaurantCategory,
    congestion: restaurantCongestion as Congestion,
    id: restaurantId,
    name: restaurantName,
    rate: restaurantRate,
    thumbnail: restaurantImage.items[0]?.thumbnail,
  };
}
