import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import { RestaurantListInfo } from '../../models/restaurant.model';
import StarRate from '../common/StarRate';
import CongestionComponent from '../common/Congestion';

interface Props extends React.PropsWithChildren {
  title: RestaurantListInfo['restaurantName'];
  rate: RestaurantListInfo['restaurantRate'];
  congestion: RestaurantListInfo['restaurantCongestion'];
  category: RestaurantListInfo['restaurantCategory'];
  distance: RestaurantListInfo['distance'];
  imgsrc?: string;
}

const Container = styled(Paper)``;
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
  align-items: center;
`;

const DetailText = styled(Typography)``;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const CardItem = ({
  title,
  rate,
  congestion,
  category,
  distance,
  ...props
}: Props) => {
  const { imgsrc = 'https://via.placeholder.com/600' } = props;
  return (
    <Container elevation={0}>
      <ImageContainer>
        <img src={imgsrc} alt="placeholder" />
      </ImageContainer>
      <Name variant="h2">{title}</Name>
      <DetailContainer>
        <LeftContainer>
          <StarRate rate={rate} size="small" />
          <DetailText variant="body1">{category}</DetailText>
        </LeftContainer>
        <RightContainer>
          <CongestionComponent congestion={congestion} />
          <DetailText variant="body1">{distance}km</DetailText>
        </RightContainer>
      </DetailContainer>
    </Container>
  );
};

export default CardItem;
