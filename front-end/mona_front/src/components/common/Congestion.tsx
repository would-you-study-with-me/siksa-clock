import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import MoodBadIcon from '../../assets/icons/MoodBadIcon';
import MoodGoodIcon from '../../assets/icons/MoodGoodIcon';
import MoodNormalIcon from '../../assets/icons/MoodNormalIcon';
import { Congestion } from '../../models/restaurant.model';

interface Props extends React.PropsWithChildren {
  congestion: Congestion;
}
const CongestionContainer = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
`;
const DetailText = styled(Typography)``;

const CongestionComponent = ({ congestion }: Props) => {
  const makeCongestionIcon = () => {
    switch (congestion) {
      case Congestion.CROWDED:
        return <MoodBadIcon fontSize="small" />;
      case Congestion.NORMAL:
        return <MoodNormalIcon fontSize="small" />;
      case Congestion.SMOOTH:
        return <MoodGoodIcon fontSize="small" />;
      default:
        return <MoodBadIcon fontSize="small" />;
    }
  };
  return (
    <CongestionContainer>
      <DetailText variant="body1">혼잡도</DetailText>
      {makeCongestionIcon()}
    </CongestionContainer>
  );
};
export default CongestionComponent;
