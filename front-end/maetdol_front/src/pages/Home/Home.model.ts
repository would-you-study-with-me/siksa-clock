import { Congestion } from 'components/ThumbnailCard/ThumbnailCard.model';

export type RestaurantRawData = {
  openingTimeCreatedAt: string;
  openingTimeUpdatedAt: string;
  restaurantCreatedAt: string;
  restaurantUpdatedAt: string;
  restaurantName: string;
  restaurantRate: number;
  restaurantId: string;
  restaurantCongestion: string;
  restaurantWaitingPeople: number;
  restaurantOpeningTimeDays: string | null;
  restaurantOpeningTime: string | null;
  restaurantBreakTimeDays: string | null;
  restaurantBreakTime: string | null;
  restaurantCategory: string | null;
  restaurantCountSeats: number | null;
  restaurantX: number | null;
  restaurantY: number | null;
  restaurantAddress: string | null;
  restaurantDescription: string | null;
  restaurantContact: string | null;
};

export type RestaurantThumbnailCard = {
  category: string | null;
  id: string;
  congestion: Congestion;
  rate: number;
  name: string;
};
