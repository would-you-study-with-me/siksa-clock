import { useEffect, useState } from 'react';

const typeOf = (v: unknown) => typeof v;
type ReturnTypeOfTypeof = ReturnType<typeof typeOf>;

type ReturnValue = {
  isLoaded: boolean;
};

export function useLoadExternalScript(
  url: string,
  isDefined: ReturnTypeOfTypeof,
): ReturnValue {
  const [isLoaded, setIsLoaded] = useState(isDefined !== 'undefined');

  useEffect(() => {
    if (isLoaded) return;

    const scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = () => setIsLoaded(true);
    document.body.appendChild(scriptTag);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {
    isLoaded,
  };
}
