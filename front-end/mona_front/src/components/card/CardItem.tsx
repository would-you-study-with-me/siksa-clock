import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import { RestaurantListInfo } from '../../models/restaurant.model';
import StarRate from '../common/StarRate';

interface Props extends React.PropsWithChildren {
  title: RestaurantListInfo['name'];
  rate: RestaurantListInfo['rate'];
  congestion: RestaurantListInfo['congestion'];
  category: RestaurantListInfo['category'];
  distance: RestaurantListInfo['distance'];
}

const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-height: 120px;
`;

const Name = styled(Typography)`
  padding: 16px 0 12px;
`;

const DetailContainer = styled.div`
  display: flex;
`;

const DetailText = styled(Typography)``;
const CardItem = ({ title, rate, congestion, category, distance }: Props) => {
  return (
    <Paper elevation={0}>
      <ImageContainer>
        <img src="https://via.placeholder.com/600" alt="placeholder" />
      </ImageContainer>
      <Name variant="h2">{title}</Name>
      <DetailContainer>
        <StarRate rate={rate} />
        <DetailText variant="body1">{category}</DetailText>
      </DetailContainer>
    </Paper>
  );
};

export default CardItem;
