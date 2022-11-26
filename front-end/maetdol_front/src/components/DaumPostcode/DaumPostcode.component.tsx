import { HeaderWithBackButton, Portal } from 'components';
import { usePostcode } from 'hooks/postcode';
import { useEffect, useState } from 'react';
import { StyledContainer, StyledModal } from './DaumPostcode.styles';

interface Props {
  close: () => void;
}

export function DaumPostcode({ close }: Props) {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  // TODO postcode 높이 꽉 채우기
  // TODO postcode 닫는 기능 만들기
  const [, open] = usePostcode(
    {
      width: '100%',
      height: '100%',
      oncomplete: console.log,
    },
    element ?? undefined,
  );

  useEffect(() => {
    if (element) open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Portal>
      <StyledContainer>
        <HeaderWithBackButton callback={close} />
        <StyledModal ref={setElement} />
      </StyledContainer>
    </Portal>
  );
}
