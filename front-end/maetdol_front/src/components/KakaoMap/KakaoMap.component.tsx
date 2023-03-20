import { Env, ExternalScriptUrl } from 'constants/';
import { useLoadExternalScript } from 'hooks';
import { CSSProperties, useEffect, useRef } from 'react';

interface Props {
  x: number;
  y: number;
  style?: CSSProperties;
}

export function KakaoMap({ x, y, style = {} }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { isLoaded } = useLoadExternalScript(
    `${ExternalScriptUrl.KAKAO_MAP}?autoload=false&appkey=${Env.KAKAO_APP_KEY}`,
    typeof kakao,
  );

  useEffect(() => {
    if (!ref.current) return;
    if (!isLoaded) return;

    kakao.maps.load(() => {
      if (!ref.current) return;

      const map = new kakao.maps.Map(ref.current, {
        center: new kakao.maps.LatLng(y, x),
        level: 3,
      });

      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(y, x),
      });
      marker.setMap(map);
    });
  }, [isLoaded, ref, x, y]);

  return <div ref={ref} style={style} />;
}
