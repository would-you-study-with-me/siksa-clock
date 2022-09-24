import { Portal } from 'components';
import { usePostcode } from 'hooks/postcode';
import { useEffect, useRef } from 'react';
import { StyledModal } from './DaumPostcode.styles';

export function DaumPostcode() {
  const ref = useRef<HTMLDivElement>(null);
  // TODO postcode 높이 꽉 채우기
  // TODO postcode 닫는 기능 만들기
  const [, open] = usePostcode(
    {
      width: '100%',
      height: '100%',
      oncomplete: console.log,
    },
    ref.current || undefined,
  );

  useEffect(() => {
    open();
  }, [open]);

  return (
    <Portal>
      <StyledModal ref={ref} />
    </Portal>
  );
}
