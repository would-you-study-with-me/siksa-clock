import { Icon, IconFileNames } from 'components';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledHeader } from './HeaderWithBackButton.styles';

interface Props {
  callback?: () => void;
}

export function HeaderWithBackButton({ callback = undefined }: Props) {
  const navigator = useNavigate();
  const clickHandler = () => {
    if (callback) return callback();

    return navigator(-1);
  };

  return (
    <StyledHeader>
      <StyledButton type="button" aria-label="뒤로가기" onClick={clickHandler}>
        <Icon type={IconFileNames.BACK_ARROW} />
      </StyledButton>
    </StyledHeader>
  );
}
