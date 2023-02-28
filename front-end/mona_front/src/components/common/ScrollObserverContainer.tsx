import { PropsWithChildren, useEffect, useRef } from 'react';

interface Props extends PropsWithChildren {
  onIntersect: () => void;
}
const ScrollObserverContainer = ({ onIntersect, children }: Props) => {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!element.current) return undefined;
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) onIntersect();
      },
      {
        threshold: 0.7, // 1일 경우 contents box 크기만큼 영역 계산
      },
    );
    observer.observe(element.current);
    return () => observer.disconnect();
  }, [element, onIntersect]);
  return <div ref={element}>{children}</div>;
};

export default ScrollObserverContainer;
