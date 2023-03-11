import styled from '@emotion/styled';
import COLORS from 'assets/color';
import PinIcon from './icons/PinIcon';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  gap: 7.79px;
  padding: 15px;
  border-bottom: 1px solid ${COLORS.gray};
`;

const LocationHeader = () => {
  return (
    <div>
      <HeaderContainer>
        <PinIcon color="primary" fontSize="medium" />내 주소
      </HeaderContainer>
    </div>
  );
};

export default LocationHeader;
