import { Icon, StarRate } from 'components';
import { Congestion, CongestionIconMap } from './ThumbnailCard.model';
import { S } from './ThumbnailCard.styles';

interface Props {
  thumbnailSrc: string;
  title: string;
  rating: number;
  restaurantId: string;
  meterDistance: number;
  congestion: Congestion;
  category: string;
}

export function ThumbnailCard({
  category,
  congestion,
  meterDistance,
  rating,
  restaurantId,
  thumbnailSrc,
  title,
}: Props) {
  return (
    <S.Card>
      <S.Link to={`/r/${restaurantId}`}>
        <S.CardImage src={thumbnailSrc} />
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardInformationWrapper>
          <StarRate rating={rating} />
          <S.CardCategory>{category}</S.CardCategory>
          <S.RightContents>
            <S.Congestion>혼잡도</S.Congestion>
            <Icon type={CongestionIconMap[congestion]} />
            <S.Disatnce>{meterDistance}m</S.Disatnce>
          </S.RightContents>
        </S.CardInformationWrapper>
      </S.Link>
    </S.Card>
  );
}
