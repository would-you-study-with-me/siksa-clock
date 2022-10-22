import { getHtml } from 'api/request';
import { RefObject, useEffect, useState } from 'react';
import { ReplaceColorSet } from './Icon.models';

export function useLoadIcon(url: string) {
  const [element, setElement] = useState<SVGSVGElement | null>(null);
  useEffect(() => {
    (async () => {
      const iconDocument = await getHtml(url);
      setElement(iconDocument.querySelector('svg'));
    })();
  }, [url]);

  return element;
}

export function useAppendIconTo(
  ref: RefObject<HTMLSpanElement>,
  icon: SVGSVGElement | null,
) {
  useEffect(() => {
    // no-param-reassign 에러를 피하기 위해 재할당
    const r = ref;
    if (!r.current) return;
    if (!icon) return;

    r.current.innerHTML = '';
    r.current.append(icon);
  }, [ref, icon]);
}

export function useColoringIcon(
  icon: SVGSVGElement | null,
  colors: ReplaceColorSet,
) {
  useEffect(() => {
    if (!icon) return;

    Object.entries(colors).forEach(([originColor, destinationColor]) => {
      const strokeElements = icon.querySelectorAll(`[stroke=${originColor}]`);
      strokeElements.forEach(elem =>
        elem.setAttribute('stroke', destinationColor),
      );

      const fillElements = icon.querySelectorAll(`[fill=${originColor}]`);
      fillElements.forEach(elem => elem.setAttribute('fill', destinationColor));
    });
  }, [icon, colors]);
}
