import styled from '@emotion/styled';

const Header = styled.header`
  padding: 1.6rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

export const S = {
  Header,
  Button,
};
