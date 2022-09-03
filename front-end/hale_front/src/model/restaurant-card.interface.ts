export enum Congestion {
  CROWDED = 'crowded',
  NORMAL = 'normal',
  SMOOTH = 'smooth',
}

export interface RestaurantCardInfo {
  restaurantName: string;
  restaurantRate: number;
  restaurantCategory: string;
  restaurantCongestion: Congestion;
  restaurantX: number;
  restaurantY: number;
}
