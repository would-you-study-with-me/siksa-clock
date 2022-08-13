import Icon, { IconFileNames } from 'components/Icon';
import colors from 'styles/palette';
import { StyledButton, StyledHeader } from './HeaderWithSearchAddress.styles';

export default function HeaderWithSearchAddress() {
  return (
    <StyledHeader>
      <StyledButton type="button">
        <Icon
          type={IconFileNames.LOCATION_PIN}
          colors={{ black: colors.primaryDark }}
        />
        동이름(시 구)
      </StyledButton>
    </StyledHeader>
  );
}
