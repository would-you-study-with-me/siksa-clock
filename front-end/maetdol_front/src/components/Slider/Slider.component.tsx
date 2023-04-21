import { useState } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { S } from './Slider.styles';

interface Props {
  indicator?: boolean;
  children: React.ReactNode[];
}

export function Slider({ indicator = false, children }: Props) {
  const [index, setIndex] = useState(0);

  return (
    <S.SliderContainer>
      <SlickSlider autoplay arrows={false} afterChange={setIndex}>
        {children}
      </SlickSlider>

      {indicator && (
        <S.Indicator>
          {index + 1} / {children.length}
        </S.Indicator>
      )}
    </S.SliderContainer>
  );
}
