import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  padding: 1.6rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  position: sticky;
  top: 0;
  background-color: white;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;
