import { DaumPostcode, Icon, IconFileNames } from 'components';
import { LocalStorageKeys } from 'constants/localstorage-keys.constants';
import { useLocalStorageState } from 'hooks';
import { useState } from 'react';
import colors from 'styles/palette';
import { StyledButton, StyledHeader } from './HeaderWithSearchAddress.styles';

export function HeaderWithSearchAddress() {
  const [showSearchAddress, setShowSearchAddress] = useState(false);
  const [currentAddress, setCurrentAddress] = useLocalStorageState(
    LocalStorageKeys.CURRENT_ADDRESS,
    '서울시 강남구',
  );

  return (
    <StyledHeader>
      <StyledButton type="button" onClick={() => setShowSearchAddress(true)}>
        <Icon
          type={IconFileNames.LOCATION_PIN}
          colors={{ black: colors.primaryDark }}
        />
        {currentAddress}
      </StyledButton>
      {showSearchAddress && (
        <DaumPostcode
          close={() => setShowSearchAddress(false)}
          onComplete={res => {
            setCurrentAddress(res.address);
            setShowSearchAddress(false);
          }}
        />
      )}
    </StyledHeader>
  );
}
