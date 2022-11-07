import { ThumbnailCard } from 'components';
import { Congestion } from 'components/ThumbnailCard/ThumbnailCard.model';
import { useRestaurantsThumbnailCard } from './Home.hooks';
import { StyeldCardList, StyledContainer, StyledTitle } from './Home.styles';

export function Home() {
  const { loading, error, thumbnailCards } =
    useRestaurantsThumbnailCard('강남구');

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <StyledContainer>
      <StyledTitle>내 주변 식사</StyledTitle>
      <StyeldCardList>
        {thumbnailCards.map(v => (
          <ThumbnailCard
            category={v.name}
            congestion={Congestion.CROWDED}
            meterDistance={172}
            rating={3}
            restaurantId="1372-abf334"
            thumbnailSrc="https://via.placeholder.com/150"
            title="달사카세"
          />
        ))}
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
      </StyeldCardList>
    </StyledContainer>
  );
}
