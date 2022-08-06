import styled from '@emotion/styled';
import { Colors } from 'styles/palette';

export const StyledButton = styled.button<{
  textColor: Colors;
  backgroundColor: Colors;
  hasIcon: boolean;
}>`
  cursor: pointer;
  border-radius: 0.8rem;
  border: none;
  padding: 1.6rem 2.4rem;
  color: white;
  background-color: ${props => props.backgroundColor};
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  ${props => props.theme.typography.button};

  ${props => props.hasIcon && `padding: 1.1rem 2.2rem`};
`;
