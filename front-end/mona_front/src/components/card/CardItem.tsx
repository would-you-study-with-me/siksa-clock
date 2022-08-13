import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import { RestaurantListInfo } from '../../models/restaurant.model';
import StarRate from '../common/StarRate';
import MoodBadIcon from '../../assets/icons/MoodBadIcon';
import MoodNormalIcon from '../../assets/icons/MoodNormalIcon';
import MoodGoodIcon from '../../assets/icons/MoodGoodIcon';

interface Props extends React.PropsWithChildren {
  title: RestaurantListInfo['name'];
  rate: RestaurantListInfo['rate'];
  congestion: RestaurantListInfo['congestion'];
  category: RestaurantListInfo['category'];
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

const CongestionContainer = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
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
  const makeCongestionIcon = () => {
    switch (congestion) {
      case 'crowded':
        return <MoodBadIcon fontSize="small" />;
      case 'normal':
        return <MoodNormalIcon fontSize="small" />;
      case 'smooth':
        return <MoodGoodIcon fontSize="small" />;
      default:
        return <MoodBadIcon fontSize="small" />;
    }
  };
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
          <CongestionContainer>
            <DetailText variant="body1">혼잡도</DetailText>
            {makeCongestionIcon()}
          </CongestionContainer>
          <DetailText variant="body1">{distance}km</DetailText>
        </RightContainer>
      </DetailContainer>
    </Container>
  );
};

export default CardItem;
