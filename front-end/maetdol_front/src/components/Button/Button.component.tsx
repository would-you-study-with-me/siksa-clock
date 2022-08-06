import Icon, { IconFileNames } from 'components/Icon';
import { MouseEventHandler, ReactNode } from 'react';
import colors, { Colors } from 'styles/palette';
import { StyledButton } from './Button.styles';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: Colors;
  textColor?: Colors;
  submitType?: boolean;
  icon?: IconFileNames;
  iconPosition?: 'begin' | 'end';
  outline?: boolean;
};

export default function Button({
  children,
  onClick = undefined,
  backgroundColor = colors.green,
  textColor = colors.white,
  submitType = false,
  icon = undefined,
  iconPosition = 'begin',
  outline = false,
}: Props) {
  const RenderedIcon = icon && (
    <Icon size={25} type={icon} colors={{ black: textColor }} />
  );

  return (
    <StyledButton
      onClick={onClick}
      type={submitType ? 'submit' : 'button'}
      backgroundColor={backgroundColor}
      textColor={textColor}
      hasIcon={!!icon}
      outline={outline}
    >
      {iconPosition === 'begin' && RenderedIcon}
      {children}
      {iconPosition === 'end' && RenderedIcon}
    </StyledButton>
  );
}
