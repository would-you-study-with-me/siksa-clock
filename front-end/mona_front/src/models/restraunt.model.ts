export type Congestion = 'crowded' | 'normal' | 'smooth';

export interface RestaurantListInfo {
  id: string;
  name: string;
  rate: number;
  congestion: Congestion;
  distance: number;
  category: string;
}
export interface RestaurantDetailInfo extends RestaurantListInfo {
  phone: number;
  opening_time: string; // ??? datetime형식으로 들어올 수도 있음
  menu_image: string[];
  description: string;
  address: string;
}
