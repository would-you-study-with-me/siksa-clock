import { Loading, ScrollObserver, ThumbnailCard } from 'components';
import { useRestaurantsThumbnailCard } from './Home.hooks';
import { S } from './Home.styles';

export function Home() {
  // TODO 에러 처리
  const { loading, error, thumbnailCards, loadMore } =
    useRestaurantsThumbnailCard('장전동');

  return (
    <S.Container>
      <S.Title>내 주변 식사</S.Title>
      <S.CardList>
        {thumbnailCards.map(
          ({ category, congestion, id, name, rate, thumbnail }) => (
            <ThumbnailCard
              key={id}
              category={category ?? ''}
              congestion={congestion}
              meterDistance={172}
              rating={rate}
              restaurantId={id}
              thumbnailSrc={thumbnail}
              title={name}
            />
          ),
        )}
      </S.CardList>

      <ScrollObserver bottom="-480px" onIntersect={loadMore} />
      <Loading hide={!loading} />
    </S.Container>
  );
}
