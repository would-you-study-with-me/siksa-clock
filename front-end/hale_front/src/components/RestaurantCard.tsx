import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import { RestaurantCardInfo } from '../model/restaurant-card.interface';
import Thumbnail from './Thumbnail';
import CardTitle from './CardTitle';
import StarRate from './StarRate';

interface RestaurantCardProps extends React.PropsWithChildren {
  name: RestaurantCardInfo['restaurantName'];
  rate: RestaurantCardInfo['restaurantRate'];
  category: RestaurantCardInfo['restaurantCategory'];
  congestion: RestaurantCardInfo['restaurantCongestion'];
  image: RestaurantCardInfo['restaurantImage'];
  // onClick?: () => void;
}

const RestaurantCard = ({
  name,
  rate,
  category,
  congestion,
  image,
}: RestaurantCardProps) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Thumbnail imageData={image} />
          <CardTitle name={name} />
          <StarRate rate={rate} />
          <Typography variant="body1">{category}</Typography>
          <Typography variant="body1">혼잡도</Typography>
          <div>{congestion}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantCard;
