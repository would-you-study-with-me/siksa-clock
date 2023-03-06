export enum Congestion {
  CROWDED = '혼잡',
  NORMAL = '보통',
  SMOOTH = '원활',
}

export interface ImageRaw {
  title: string;
  link: string;
  thumbnail: string;
  sizeheight: string;
  sizewidth: string;
}

interface RestaurantImageResponseSuccess {
  total: number;
  start: number;
  display: number;
  items: ImageRaw[];
}

interface RestaurantImageResponseError {
  errorMessage: string;
  errorCode: string;
}

export type RestaurantImageResponse =
  | RestaurantImageResponseSuccess
  | RestaurantImageResponseError;

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
