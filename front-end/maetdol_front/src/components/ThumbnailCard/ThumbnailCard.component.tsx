import Icon from 'components/Icon';
import StarRate from 'components/StarRate';
import { Congestion, CongestionIconMap } from './ThumbnailCard.model';
import {
  StyeldCardInformationWrapper,
  StyledCard,
  StyledCardCategory,
  StyledCardImage,
  StyledCardTitle,
  StyledCongestion,
  StyledDisatnce,
  StyledLink,
  StyledRightContents,
} from './ThumbnailCard.styles';

interface Props {
  thumbnailSrc: string;
  title: string;
  rating: number;
  restaurantId: string;
  meterDistance: number;
  congestion: Congestion;
  category: string;
}

export default function ThumbnailCard({
  category,
  congestion,
  meterDistance,
  rating,
  restaurantId,
  thumbnailSrc,
  title,
}: Props) {
  return (
    <StyledCard>
      <StyledLink to={`/r/${restaurantId}`}>
        <StyledCardImage src={thumbnailSrc} />
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyeldCardInformationWrapper>
          <StarRate rating={rating} />
          <StyledCardCategory>{category}</StyledCardCategory>
          <StyledRightContents>
            <StyledCongestion>혼잡도</StyledCongestion>
            <Icon type={CongestionIconMap[congestion]} />
            <StyledDisatnce>{meterDistance}m</StyledDisatnce>
          </StyledRightContents>
        </StyeldCardInformationWrapper>
      </StyledLink>
    </StyledCard>
  );
}
