import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import { RestaurantCardInfo } from '../model/restaurant-card.interface';
import Thumbnail from './Thumbnail';
import CardTitle from './CardTitle';
import StarRate from './StarRate';
import CongestionRate from './CongestionRate';

interface RestaurantCardProps extends React.PropsWithChildren {
  name: RestaurantCardInfo['restaurantName'];
  rate: RestaurantCardInfo['restaurantRate'];
  category: RestaurantCardInfo['restaurantCategory'];
  congestion: RestaurantCardInfo['restaurantCongestion'];
  image: RestaurantCardInfo['restaurantImage'];
  // onClick?: () => void;
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
          <ContentContainer>
            <StarRate rate={rate} />
            <Typography variant="body1">{category}</Typography>
            <CongestionRate rate={congestion} />
          </ContentContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantCard;
