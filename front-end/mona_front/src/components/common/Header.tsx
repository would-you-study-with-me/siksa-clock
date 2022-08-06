import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import PinIcon from '../../assets/icons/PinIcon';
import Colors from '../../assets/styles/Colors';
import BackArrowIcon from '../../assets/icons/BackArrowIcon';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid ${Colors.gray};
`;

const AddressTypo = styled(Typography)`
  margin-left: 8px;
`;
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickBack = useCallback(() => {
    return navigate(-1);
  }, [navigate]);

  if (location.pathname === '/') {
    return (
      <HeaderContainer>
        <PinIcon />
        <AddressTypo variant="body1">주소1</AddressTypo>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <BackArrowIcon onClick={onClickBack} />
    </HeaderContainer>
  );
};

export default Header;
