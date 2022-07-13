import '@emotion/react';
import { typography } from '../styles/typography';

declare module '@emotion/react' {
  interface Theme {
    typography: typography;
  }
}
