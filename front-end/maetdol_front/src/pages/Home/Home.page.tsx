import { Icon, StarRate } from 'components';
import { IconFileNames } from 'components/Icon';
import { Link } from 'react-router-dom';
import {
  StyeldCardList,
  StyledCard,
  StyledCardImage,
  StyledCardTitle,
  StyledContainer,
  StyledTitle,
} from './Home.styles';

export function Home() {
  return (
    <StyledContainer>
      <StyledTitle>내 주변 식사</StyledTitle>
      <StyeldCardList>
        <StyledCard>
          <Link to="/">
            <StyledCardImage src="/asd" alt="temp" />
            <StyledCardTitle>
              젠킨스 할아버지는 왜 달사를 괴롭히나
            </StyledCardTitle>
            <div>
              <StarRate rating={4} />
              <span>양식</span>
              <span>
                <span>혼잡도</span>
                <Icon type={IconFileNames.FACE_GOOD} />
                <span>99999m</span>
              </span>
            </div>
          </Link>
        </StyledCard>
      </StyeldCardList>
    </StyledContainer>
  );
}
