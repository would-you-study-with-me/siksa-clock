import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

const Title = styled.h2`
  margin: 0 0 1.6rem 0;
  ${props => props.theme.typography.head2};
`;

const Card = styled.li`
  margin-bottom: 2.4rem;
  transform-origin: top;
  animation: .2s ease load;

  @keyframes load {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }

    100% {
      opacity: 1;
      transform; scale(1);
    }
  }
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.fontBlack};
`;

const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  object-position: center;
  background: ${p => p.theme.colors.white};
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  ${props => props.theme.typography.title1};
  margin: 1.6rem 0 1.3rem;
`;

const CardInformationWrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
`;

const CardCategory = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.fontBlack};
  margin-left: 0.8rem;
`;

const RightContents = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Congestion = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.fontBlack};
`;

const Disatnce = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.fontBlack};
  margin-left: 2.4rem;
`;

export const S = {
  Title,
  Card,
  Link,
  CardImage,
  CardTitle,
  CardInformationWrapper,
  CardCategory,
  RightContents,
  Congestion,
  Disatnce,
};
