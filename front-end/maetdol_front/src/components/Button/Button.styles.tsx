import styled from '@emotion/styled';
import { Colors } from 'styles/palette';

export const StyledButton = styled.button<{
  textColor: Colors;
  backgroundColor: Colors;
}>`
  cursor: pointer;
  border-radius: 0.8rem;
  border: none;
  padding: 1.6rem 2.4rem;
  color: white;
  background-color: ${props => props.backgroundColor};
  ${props => props.theme.typography.button};
`;

export const StyledIcon = styled.span``;
