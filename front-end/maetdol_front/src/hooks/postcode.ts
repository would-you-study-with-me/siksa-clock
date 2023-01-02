import { getPostcode } from 'api/daum';
import { useCallback, useEffect, useRef, useState } from 'react';

export function usePostcode(
  initialOption: daum.ConstructorProp,
  embed?: HTMLElement,
): [daum.Postcode | undefined, () => void] {
  const [postcode, setPostcode] = useState<daum.Postcode>();

  const previousOptionRef = useRef<daum.ConstructorProp>();

  useEffect(() => {
    const hasSameKeyLength =
      Object.values(initialOption).length ===
      Object.values(previousOptionRef.current || {}).length;

    if (previousOptionRef.current && hasSameKeyLength) return;
    previousOptionRef.current = initialOption;

    getPostcode(initialOption).then(setPostcode);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialOption]);

  const open = useCallback(
    (option?: daum.OpenParameter) => {
      if (!embed) {
        postcode?.open(option);
      } else {
        postcode?.embed(embed, option);
      }
    },
    [postcode, embed],
  );

  return [postcode, open];
}
