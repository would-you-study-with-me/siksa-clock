import { useRef } from 'react';
import { useAppendIconTo, useColoringIcon, useLoadIcon } from './Icon.hooks';
import { baseIconUrl, IconFileNames, ReplaceColorSet } from './Icon.models';
import { S } from './Icon.styles';

type Props = {
  type: IconFileNames;
  colors?: ReplaceColorSet;
  size?: number;
};

export function Icon({ type, colors = {}, size = 24 }: Props) {
  const iconElement = useLoadIcon(`${baseIconUrl}/${type}`);
  const ref = useRef<HTMLSpanElement>(null);

  useColoringIcon(iconElement, colors);
  useAppendIconTo(ref, iconElement);

  return <S.Span size={size} ref={ref} />;
}
