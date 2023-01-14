import styled from '@emotion/styled';
import { Colors } from 'styles/palette';

const Button = styled.button<{
  textColor: Colors;
  backgroundColor: Colors;
  hasIcon: boolean;
  outline: boolean;
}>`
  cursor: pointer;
  border-radius: 0.8rem;
  padding: 1.6rem 2.4rem;
  color: ${props => props.textColor};
  border: 1px solid ${props => props.backgroundColor};
  background-color: ${props => props.backgroundColor};
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  ${props => props.theme.typography.button};

  ${props => props.hasIcon && `padding: 1.1rem 2.2rem`};

  ${props =>
    props.outline &&
    `
      background-color: transparent;
      border: 1px solid ${props.textColor};
   `};
`;

export const S = {
  Button,
}