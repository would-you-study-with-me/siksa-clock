import { getHtml } from "api/request";
import { useEffect, useRef, useState } from "react";
import { baseIconUrl, IconFileNames } from "./Icon.models";

type Props = {
  type: IconFileNames
}

export default function Icon({ type }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {

    (async () => {
      if(!ref.current) return;

      const icon = await getHtml(`${baseIconUrl}/${type}`)
      ref.current.append(icon);
    })();
  }, [type]);
  return <span ref={ref} />;
}
