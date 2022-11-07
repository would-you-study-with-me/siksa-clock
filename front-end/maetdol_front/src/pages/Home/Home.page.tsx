import { ThumbnailCard } from 'components';
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
        {thumbnailCards.map(({ category, congestion, id, name, rate }) => (
          <ThumbnailCard
            key={id}
            category={category ?? ''}
            congestion={congestion}
            meterDistance={172}
            rating={rate}
            restaurantId={id}
            thumbnailSrc="https://via.placeholder.com/150"
            title={name}
          />
        ))}
      </StyeldCardList>
    </StyledContainer>
  );
}
