import styled from '@emotion/styled';

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

export const StyledCardImage = styled.image`
  width: 100%;
  height: 1.2rem;
  border-radius: 8px;
`;

export const StyledCardTitle = styled.h3`
  ${props => props.theme.typography.title1}
`;
