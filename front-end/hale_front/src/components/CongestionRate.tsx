import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Congestion } from '../model/restaurant-card.interface';
import MoodGoodIcon from './icons/MoodGoodIcon';
import MoodNormalIcon from './icons/MoodNormalIcon';
import MoodBadIcon from './icons/MoodBadIcon';

interface CongestionProps extends React.PropsWithChildren {
  rate: Congestion;
}

const CongestionRateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.34px;
`;

const CongestionRate = ({ rate }: CongestionProps) => {
  if (rate === Congestion.CROWDED) {
    return (
      <CongestionRateContainer>
        <Typography variant="body1">혼잡도</Typography>
        <MoodBadIcon />
      </CongestionRateContainer>
    );
  }
  if (rate === Congestion.NORMAL) {
    return (
      <CongestionRateContainer>
        <Typography variant="body1">혼잡도</Typography>
        <MoodNormalIcon />
      </CongestionRateContainer>
    );
  }
  return (
    <CongestionRateContainer>
      <Typography variant="body1">혼잡도</Typography>
      <MoodGoodIcon />
    </CongestionRateContainer>
  );
};

export default CongestionRate;
