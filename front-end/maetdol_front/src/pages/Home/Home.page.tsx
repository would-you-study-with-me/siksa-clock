import { Icon, StarRate } from 'components';
import { IconFileNames } from 'components/Icon';
import {
  StyeldCardInformationWrapper,
  StyeldCardList,
  StyledCard,
  StyledCardCategory,
  StyledCardImage,
  StyledCardTitle,
  StyledCongestion,
  StyledContainer,
  StyledDisatnce,
  StyledLink,
  StyledRightContents,
  StyledTitle,
} from './Home.styles';

export function Home() {
  return (
    <StyledContainer>
      <StyledTitle>내 주변 식사</StyledTitle>
      <StyeldCardList>
        <StyledCard>
          <StyledLink to="/">
            <StyledCardImage
              src="https://via.placeholder.com/150x270"
              alt="temp"
            />
            <StyledCardTitle>
              젠킨스 할아버지는 왜 달사를 괴롭히나
            </StyledCardTitle>
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
        <StyledCard>
          <StyledLink to="/">
            <StyledCardImage
              src="https://via.placeholder.com/150x270"
              alt="temp"
            />
            <StyledCardTitle>
              젠킨스 할아버지는 왜 달사를 괴롭히나
            </StyledCardTitle>
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
        <StyledCard>
          <StyledLink to="/">
            <StyledCardImage
              src="https://via.placeholder.com/150x270"
              alt="temp"
            />
            <StyledCardTitle>
              젠킨스 할아버지는 왜 달사를 괴롭히나
            </StyledCardTitle>
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
        <StyledCard>
          <StyledLink to="/">
            <StyledCardImage
              src="https://via.placeholder.com/150x270"
              alt="temp"
            />
            <StyledCardTitle>
              젠킨스 할아버지는 왜 달사를 괴롭히나
            </StyledCardTitle>
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
        <StyledCard>
          <StyledLink to="/">
            <StyledCardImage
              src="https://via.placeholder.com/150x270"
              alt="temp"
            />
            <StyledCardTitle>
              젠킨스 할아버지는 왜 달사를 괴롭히나
            </StyledCardTitle>
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
      </StyeldCardList>
    </StyledContainer>
  );
}
