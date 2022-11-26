import { DaumPostcode } from 'components';
import Icon, { IconFileNames } from 'components/Icon';
import { useState } from 'react';
import colors from 'styles/palette';
import { StyledButton, StyledHeader } from './HeaderWithSearchAddress.styles';

export default function HeaderWithSearchAddress() {
  const [showSearchAddress, setShowSearchAddress] = useState(false);

  return (
    <StyledHeader>
      <StyledButton type="button" onClick={() => setShowSearchAddress(true)}>
        <Icon
          type={IconFileNames.LOCATION_PIN}
          colors={{ black: colors.primaryDark }}
        />
        동이름(시 구)
      </StyledButton>
      {showSearchAddress && (
        <DaumPostcode close={() => setShowSearchAddress(false)} />
      )}
    </StyledHeader>
  );
}
