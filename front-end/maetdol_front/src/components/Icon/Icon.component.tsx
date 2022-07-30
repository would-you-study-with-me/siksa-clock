import { useRef } from 'react';
import { useAppendIconTo, useColoringIcon, useLoadIcon } from './Icon.hooks';
import { baseIconUrl, IconFileNames, ReplaceColorSet } from './Icon.models';

type Props = {
  type: IconFileNames;
  colors?: ReplaceColorSet;
};

function Icon({ type, colors = {} }: Props) {
  const iconElement = useLoadIcon(`${baseIconUrl}/${type}`);
  const ref = useRef<HTMLSpanElement>(null);

  useColoringIcon(iconElement, colors);
  useAppendIconTo(ref, iconElement);

  return <span ref={ref} />;
}

export default Icon;
