export type Congestion = 'crowded' | 'normal' | 'smooth';

export interface RestrauntListInfo {
  id: string;
  name: string;
  rate: number;
  congestion: string;
  distance: number;
  category: string;
}
export interface RestrauntDetailInfo extends RestrauntListInfo {
  phone: number;
  opening_time: string; // ??? datetime형식으로 들어올 수도 있음
  menu_image: string[];
  description: string;
  address: string;
}
