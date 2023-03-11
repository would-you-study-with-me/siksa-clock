import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { S } from './Slider.styles';

interface Props {
  indicator?: boolean;
  children: React.ReactNode[];
}

export function Slider({ indicator = false, children }: Props) {
  return (
    <S.SliderContainer>
      <SlickSlider autoplay arrows={false}>
        {children}
      </SlickSlider>
      {indicator && <S.Indicator>2 / 2</S.Indicator>}
    </S.SliderContainer>
  );
}
