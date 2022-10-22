export type Congestion = 'crowded' | 'normal' | 'smooth';

export interface RestaurantListInfo {
  restaurantId: string;
  restaurantName: string;
  restaurantRate: number;
  restaurantCongestion: Congestion;
  distance: number;
  restaurantCategory: string;
}
export interface RestaurantDetailInfo extends RestaurantListInfo {
  phone: number;
  opening_time: string; // ??? datetime형식으로 들어올 수도 있음
  menu_image: string[];
  restaurantDescription: string;
  restaurantAddress: string;
}
