export enum Congestion {
  CROWDED = 'crowded',
  NORMAL = 'normal',
  SMOOTH = 'smooth',
}

export interface RestaurantCardInfo {
  restaurantId: string;
  restaurantName: string;
  restaurantRate: number;
  restaurantCategory: string;
  restaurantCongestion: Congestion;
  restaurantX: number;
  restaurantY: number;
  restaurantImage: RestaurantImageResponse;
}

export interface RestaurantImageResponse {
  total: number;
  start: number;
  display: number;
  items: ImageRaw[];
}
export interface ImageRaw {
  title: string;
  link: string;
  thumbnail: string;
  sizeheight: string;
  sizewidth: string;
}
