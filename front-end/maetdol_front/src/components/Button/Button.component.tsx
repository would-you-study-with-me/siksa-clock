import { Icon, IconFileNames } from 'components';
import { MouseEventHandler, PropsWithChildren } from 'react';
import colors, { Colors } from 'styles/palette';
import { S } from './Button.styles';

type Props = PropsWithChildren<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: Colors;
  textColor?: Colors;
  submitType?: boolean;
  icon?: IconFileNames;
  iconPosition?: 'begin' | 'end';
  outline?: boolean;
  fullWidth?: boolean;
}>;

export function Button({
  children = undefined,
  onClick = undefined,
  backgroundColor = colors.green,
  textColor = colors.white,
  submitType = false,
  icon = undefined,
  iconPosition = 'begin',
  outline = false,
  fullWidth = false,
}: Props) {
  const RenderedIcon = icon && (
    <Icon size={25} type={icon} colors={{ black: textColor }} />
  );

  return (
    <S.Button
      onClick={onClick}
      type={submitType ? 'submit' : 'button'}
      backgroundColor={backgroundColor}
      textColor={textColor}
      hasIcon={!!icon}
      outline={outline}
      fullWidth={fullWidth}
    >
      {iconPosition === 'begin' && RenderedIcon}
      {children}
      {iconPosition === 'end' && RenderedIcon}
    </S.Button>
  );
}
