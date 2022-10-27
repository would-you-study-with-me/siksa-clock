import Icon, { IconFileNames } from 'components/Icon';
import StarRate from 'components/StarRate';
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

export default function ThumbnailCard() {
  return (
    <StyledCard>
      <StyledLink to="/">
        <StyledCardImage src="https://via.placeholder.com/150x270" alt="temp" />
        <StyledCardTitle>젠킨스 할아버지는 왜 달사를 괴롭히나</StyledCardTitle>
        <StyeldCardInformationWrapper>
          <StarRate rating={4} />
          <StyledCardCategory>양식</StyledCardCategory>
          <StyledRightContents>
            <StyledCongestion>혼잡도</StyledCongestion>
            <Icon type={IconFileNames.FACE_GOOD} />
            <StyledDisatnce>99999m</StyledDisatnce>
          </StyledRightContents>
        </StyeldCardInformationWrapper>
      </StyledLink>
    </StyledCard>
  );
}
