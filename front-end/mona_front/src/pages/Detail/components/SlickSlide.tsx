import styled from '@emotion/styled';
import Slider, { Settings } from 'react-slick';

interface Props {
  imageUrls: string[];
  settings?: Settings;
}

const SlideImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const SlickSlide = ({ imageUrls, ...rest }: Props) => {
  const { settings } = rest;
  const defaultSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slides = imageUrls.map((url, index) => (
    <div key={url}>
      <SlideImage src={url} alt={`slide-${index}`} />
    </div>
  ));
  return <Slider {...(settings || defaultSettings)}>{slides}</Slider>;
};

export default SlickSlide;
