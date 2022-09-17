import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import { RestaurantCardInfo } from '../model/restaurant-card.interface';

interface RestaurantCardProps extends React.PropsWithChildren {
  name: RestaurantCardInfo['restaurantName'];
  rate: RestaurantCardInfo['restaurantRate'];
  category: RestaurantCardInfo['restaurantCategory'];
  congestion: RestaurantCardInfo['restaurantCongestion'];
  // onClick?: () => void;
}

const RestaurantCard = ({
  name,
  rate,
  category,
  congestion,
}: RestaurantCardProps) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img
            alt="restaurant thumbnail"
            style={{ backgroundPosition: 'center' }}
          />
          <Typography variant="subtitle1">{name}</Typography>
          <div>평점: {rate}</div>
          <div>카테고리: {category}</div>
          <div>혼잡도: {congestion}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantCard;
