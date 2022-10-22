import Icon, { IconFileNames } from 'components/Icon';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledHeader } from './HeaderWithBackButton.styles';

export default function HeaderWithBackButton() {
  const navigator = useNavigate();

  return (
    <StyledHeader>
      <StyledButton
        type="button"
        aria-label="뒤로가기"
        onClick={() => navigator(-1)}
      >
        <Icon type={IconFileNames.BACK_ARROW} />
      </StyledButton>
    </StyledHeader>
  );
}
