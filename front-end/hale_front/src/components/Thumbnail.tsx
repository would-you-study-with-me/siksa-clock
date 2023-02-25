import styled from '@emotion/styled';
import { RestaurantImageResponse } from 'model/restaurant-card.interface';

interface ThumbnailProps extends React.PropsWithChildren {
  imageData: RestaurantImageResponse;
}

const ImageContainer = styled.div`
  border-radius: 8px;
  width: 100%;
  max-width: 420px;
  max-height: 140px;
  overflow: hidden;
  img {
    width: 100%;
    max-height: 140px;
  }
`;

const Thumbnail = ({ imageData }: ThumbnailProps) => {
  if ('items' in imageData && imageData.items.length) {
    const imageUrl = imageData.items[0].thumbnail;
    return (
      <ImageContainer>
        <img alt="restaurant thumbnail" src={imageUrl} />
      </ImageContainer>
    );
  }
  return (
    <ImageContainer>
      <img
        alt="restaurant thumbnail"
        src="https://via.placeholder.com/500?text=siksa"
      />
    </ImageContainer>
  );
};

export default Thumbnail;
