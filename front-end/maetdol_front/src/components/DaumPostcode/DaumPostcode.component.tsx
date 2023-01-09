import { HeaderWithBackButton, Portal } from 'components';
import { usePostcode } from 'hooks/postcode';
import { useEffect, useState } from 'react';
import { StyledContainer, StyledModal } from './DaumPostcode.styles';

interface Props {
  close: () => void;
  onComplete: (res: AddressData) => void;
}

export function DaumPostcode({ close, onComplete }: Props) {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [, open] = usePostcode(
    {
      width: '100%',
      height: '100%',
      oncomplete: onComplete,
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
