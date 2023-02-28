import { useEffect, useRef, useState } from 'react';

interface Props {
  onIntersect: () => void;
  bottom: `${number}px` | `${number}rem` | `${number}.${number}rem`;
}

export function ScrollObserver({ onIntersect, bottom = '0.1rem' }: Props) {
  const [element, setElement] = useState<HTMLSpanElement | null>(null);

  const callbackRef = useRef<Props['onIntersect']>(onIntersect);
  useEffect(() => {
    callbackRef.current = onIntersect;
  }, [onIntersect]);

  useEffect(() => {
    if (!element) return undefined;

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (!isIntersecting) return;
      callbackRef.current();
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return (
    <span
      ref={setElement}
      style={{
        display: 'inline-block',
        padding: 0,
        margin: 0,
        transform: `translateY(${bottom})`,
      }}
    />
  );
}
