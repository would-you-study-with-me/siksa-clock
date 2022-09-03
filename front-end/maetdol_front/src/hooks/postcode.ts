import { getPostcode } from 'api/daum';
import { useCallback, useEffect, useState } from 'react';

export function usePostcode(
  initialOption: daum.ConstructorProp,
): [daum.Postcode | undefined, () => void] {
  const [postcode, setPostcode] = useState<daum.Postcode>();

  const [previousOptions, setPreviousOptions] =
    useState<daum.ConstructorProp>();

  useEffect(() => {
    const hasSameKeyLength =
      Object.values(initialOption).length ===
      Object.values(previousOptions || {}).length;

    if (previousOptions && hasSameKeyLength) return;
    setPreviousOptions(initialOption);

    getPostcode(initialOption).then(setPostcode);
  }, [initialOption, previousOptions]);

  const open = useCallback(
    (option?: daum.OpenParameter) => {
      postcode?.open(option);
    },
    [postcode],
  );

  return [postcode, open];
}
