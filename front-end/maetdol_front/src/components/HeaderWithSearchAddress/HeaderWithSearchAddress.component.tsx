import { DaumPostcode, Icon, IconFileNames } from 'components';
import { LocalStorageKeys } from 'constants/localstorage-keys.constants';
import { globalContext } from 'global-context';
import { useLocalStorageState } from 'hooks';
import { useContext, useEffect, useState } from 'react';
import colors from 'styles/palette';
import { S } from './HeaderWithSearchAddress.styles';

export function HeaderWithSearchAddress() {
  const [showSearchAddress, setShowSearchAddress] = useState(false);
  const [currentAddress, setCurrentAddress] = useLocalStorageState(
    LocalStorageKeys.CURRENT_ADDRESS,
    '서울시 강남구',
  );

  const { setAddress } = useContext(globalContext);
  useEffect(() => {
    setAddress(currentAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAddress]);

  return (
    <S.Header>
      <S.Button type="button" onClick={() => setShowSearchAddress(true)}>
        <Icon
          type={IconFileNames.LOCATION_PIN}
          colors={{ black: colors.primaryDark }}
        />
        {currentAddress}
      </S.Button>
      {showSearchAddress && (
        <DaumPostcode
          close={() => setShowSearchAddress(false)}
          onComplete={res => {
            setCurrentAddress(res.address);
            setShowSearchAddress(false);
          }}
        />
      )}
    </S.Header>
  );
}
