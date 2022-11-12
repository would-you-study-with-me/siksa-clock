import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import PinIcon from '../../assets/icons/PinIcon';
import Colors from '../../assets/styles/Colors';
import BackArrowIcon from '../../assets/icons/BackArrowIcon';
import { AddressData } from './PostCode';

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
  const { addressData } = location.state
    ? (location.state as {
        addressData: AddressData;
      })
    : { addressData: { address: '' } };
  const navigate = useNavigate();

  const onClickBack = useCallback(() => {
    return navigate(-1);
  }, [navigate]);

  if (location.pathname === '/') {
    return (
      <HeaderContainer>
        <Link to="/address">
          <PinIcon color="primary" fontSize="medium" />
        </Link>
        <AddressTypo variant="body1">{addressData.address}</AddressTypo>
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
