import { RestaurantImageResponse } from './restaurant-card.interface';

export default interface RestaurantDetailInfo {
  restaurantId: string;
  restaurantAddress: string;
  restaurantCongestion: string;
  restaurantCountSeats: number;
  restaurantCreatedAt: Date;
  restaurantImage: RestaurantImageResponse;
  restaurantMenu: RestaurantImageResponse;
  restaurantName: string;
  restaurantRate: number;
  restaurantUpdatedAt: Date;
  restaurantWaitingPeople: number;
  restaurantX: number;
  restaurantY: number;
}
