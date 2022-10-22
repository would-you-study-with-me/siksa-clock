import styled from '@emotion/styled';

export const StyledSpan = styled.span<{
  size: number;
}>`
  display: inline-block;
  font-size: 0;

  > svg {
    width: ${props => props.size / 10}rem;
    height: ${props => props.size / 10}rem;
  }
`;
