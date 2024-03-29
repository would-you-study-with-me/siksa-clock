export enum Congestion {
  'CROWDED' = '혼잡',
  'NORMAL' = '보통',
  'SMOOTH' = '원활',
}

export interface RestaurantImageItem {
  title: string;
  link: string;
  thumbnail: string;
  sizeheight: string;
  sizewidth: string;
}
export interface RestaurauntImage {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: RestaurantImageItem[];
}
export interface RestaurantListInfo {
  restaurantId: string;
  restaurantName: string;
  restaurantRate: number;
  restaurantCongestion: Congestion;
  distance: number;
  restaurantCategory: string;
  restaurantImage: RestaurauntImage;
}

export type ImageItem = {
  title: string;
  link: string;
  thumbnail: string;
  sizeheight: string;
  sizewidth: string;
};
type ImageType = {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: ImageItem[];
};
export interface RestaurantDetailInfo extends RestaurantListInfo {
  phone: number;
  opening_time: string; // ??? datetime형식으로 들어올 수도 있음
  restaurantMenu: ImageType;
  restaurantDescription: string;
  restaurantAddress: string;
  restaurantImage: ImageType;
  restaurantOpeningTime: string;
  restaurantOpeningTimeDays: string;
  restaurantWaitingPeople: number;
  restaurantContact: string;
  restaurantX: number;
  restaurantY: number;
}
