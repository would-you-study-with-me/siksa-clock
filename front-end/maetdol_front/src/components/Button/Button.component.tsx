import { ReactNode } from 'react';
import colors, { Colors } from 'styles/palette';
import { StyledButton } from './Button.styles';

type Props = {
  children: ReactNode;
  backgroundColor?: Colors;
  textColor?: Colors;
  submitType?: boolean;
};

export default function Button({
  children,
  backgroundColor = colors.green,
  textColor = colors.white,
  submitType = false,
}: Props) {
  return (
    <StyledButton
      type={submitType ? 'submit' : 'button'}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {children}
    </StyledButton>
  );
}
