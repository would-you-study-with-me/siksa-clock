import { ThumbnailCard } from 'components';
import { Congestion } from 'components/ThumbnailCard/ThumbnailCard.model';
import { S } from './Home.styles';

export function Home() {
  return (
    <S.Container>
      <S.Title>내 주변 식사</S.Title>
      <S.CardList>
        <ThumbnailCard
          category="일식"
          congestion={Congestion.CROWDED}
          meterDistance={172}
          rating={3}
          restaurantId="1372-abf334"
          thumbnailSrc="https://via.placeholder.com/150"
          title="달사카세"
        />
        <ThumbnailCard
          category="일식"
          congestion={Congestion.CROWDED}
          meterDistance={172}
          rating={3}
          restaurantId="1372-abf334"
          thumbnailSrc="https://via.placeholder.com/150"
          title="달사카세"
        />
        <ThumbnailCard
          category="일식"
          congestion={Congestion.CROWDED}
          meterDistance={172}
          rating={3}
          restaurantId="1372-abf334"
          thumbnailSrc="https://via.placeholder.com/150"
          title="달사카세"
        />
        <ThumbnailCard
          category="일식"
          congestion={Congestion.CROWDED}
          meterDistance={172}
          rating={3}
          restaurantId="1372-abf334"
          thumbnailSrc="https://via.placeholder.com/150"
          title="달사카세"
        />
      </S.CardList>
    </S.Container>
  );
}
