import styled from '@emotion/styled';

const Container = styled.div`
  padding: 4rem 1.6rem;
  overflow: hidden;
`;

const Title = styled.h2`
  margin: 0 0 1.6rem 0;
  ${props => props.theme.typography.head2};
`;

const CardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const S = {
  Container,
  Title,
  CardList,
};
