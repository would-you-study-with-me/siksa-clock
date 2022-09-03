import '@emotion/react';
import { colors } from '../styles/palette';
import { typography } from '../styles/typography';

declare module '@emotion/react' {
  interface Theme {
    typography: typography;
    colors: colors;
  }
}
