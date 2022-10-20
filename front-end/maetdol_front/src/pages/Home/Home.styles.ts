import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
  padding: 4rem 1.6rem;
  overflow: hidden;
`;

export const StyledTitle = styled.h2`
  margin: 0 0 1.6rem 0;
  ${props => props.theme.typography.head2};
`;

export const StyeldCardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledCard = styled.li`
  margin-bottom: 2.4rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.fontBlack};
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  object-position: center;
  background: oragne;
  border-radius: 8px;
`;

export const StyledCardTitle = styled.h3`
  ${props => props.theme.typography.title1};
  margin: 1.6rem 0 1.3rem;
`;

export const StyeldCardInformationWrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
`;

export const StyledCardCategory = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.fontBlack};
  margin-left: 0.8rem;
`;

export const StyledRightContents = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const StyledCongestion = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.fontBlack};
`;

export const StyledDisatnce = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.fontBlack};
  margin-left: 2.4rem;
`;
