import { css } from '@emotion/react';
import colors from './palette';

const globalStyle = css`
  html,
  body {
    font-size: 62.5%;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }

  #root {
    background-color: white;
    max-width: 420px;
    height: 100%;
    box-shadow: 2px 0 16px rgba(0, 0, 0, 0.05);
    margin: auto;
  }
`;

export default globalStyle;
