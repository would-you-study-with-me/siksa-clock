import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export function Portal({ children }: Props) {
  const portalElement = document.getElementById('portal');
  if (!portalElement) throw new Error(`Portal DOM Element not found`);

  return createPortal(children, portalElement);
}
