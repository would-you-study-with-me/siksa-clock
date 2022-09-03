import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import { RestaurantCardInfo } from '../model/restaurant-card.interface';

type RestaurantCardProps = {
  restaurantInfo: RestaurantCardInfo;
  // onClick?: () => void;
};

const RestaurantCard = ({ restaurantInfo }: RestaurantCardProps) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img
            alt="restaurant thumbnail"
            style={{ backgroundPosition: 'center' }}
          />
          <Typography variant="subtitle1">
            {restaurantInfo.restaurantName}
          </Typography>
          <div>평점: {restaurantInfo.restaurantRate}</div>
          <div>카테고리: {restaurantInfo.restaurantCategory}</div>
          <div>혼잡도: {restaurantInfo.restaurantCongestion}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantCard;
