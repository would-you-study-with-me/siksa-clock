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
