import { getPostcode } from 'api/daum';
import { useEffect, useState } from 'react';

export function usePostcode(initialOption: daum.ConstructorProps) {
  const [postcode, setPostcode] = useState<daum.Postcode>();
  useEffect(() => {
    getPostcode(initialOption).then(setPostcode);
  }, [initialOption]);

  const open = (option: daum.OpenParameter) => {
    postcode?.open(option);
  };

  return [postcode, open];
}
