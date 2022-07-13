import '@emotion/react';
import { typography } from '../styles/typography';
import { colors } from '../styles/palette';

declare module '@emotion/react' {
  interface Theme {
    typography: typography;
    colors: colors;
  }
}
