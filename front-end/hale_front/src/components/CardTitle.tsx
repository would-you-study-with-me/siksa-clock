import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

interface TitleProps extends React.PropsWithChildren {
  name: string;
}

const TitleContainer = styled(Typography)`
  padding: 16px 0 12px 0;
`;

const CardTitle = ({ name }: TitleProps) => {
  return <TitleContainer variant="subtitle1">{name}</TitleContainer>;
};

export default CardTitle;
