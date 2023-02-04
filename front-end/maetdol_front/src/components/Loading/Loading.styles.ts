import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div<{ hide: boolean }>`
  transition: transform 0.3s, opacity 0.3s;
  height: 52px;
  width: 64px;
  position: relative;
  margin: 16px auto;

  ${props =>
    props.hide &&
    css`
      transform: translateY(16px) scale(0.8);
      opacity: 0;
    `};
`;

const Ball = styled.span`
  --range: 48px;

  position: absolute;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.theme.colors.primaryRed};
  border-radius: 16px;
  opacity: 0.4;

  animation-name: move-left-right;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &:nth-of-type(2) {
    animation-delay: 0.3s;
    background-color: ${props => props.theme.colors.yellow};
  }

  &:nth-of-type(3) {
    animation-delay: 0.6s;
    background-color: ${props => props.theme.colors.green};
  }

  @keyframes move-left-right {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(var(--range));
    }
  }
`;

const Text = styled.span`
  position: absolute;
  top: 28px;
  left: 53%;
  transform: translateX(-50%);
  width: max-content;
  color: ${props => props.theme.colors.gray};
  ${props => props.theme.typography.head2};
`;

export const S = {
  Container,
  Ball,
  Text,
};
