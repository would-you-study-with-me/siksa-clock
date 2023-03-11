import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { ReactElement } from 'react';
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
  gap: 4px;
`;

const CongestionRate = ({ rate }: CongestionProps) => {
  let icon: ReactElement;
  if (rate === Congestion.CROWDED) {
    icon = <MoodBadIcon />;
  } else if (rate === Congestion.NORMAL) {
    icon = <MoodNormalIcon />;
  } else {
    icon = <MoodGoodIcon />;
  }
  return (
    <CongestionRateContainer>
      <Typography variant="body1">혼잡도</Typography>
      {icon}
    </CongestionRateContainer>
  );
};

export default CongestionRate;
