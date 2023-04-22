import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  padding: 1.6rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
`;

export const StyledButton = styled.button`
  cursor: pointer;
`;
