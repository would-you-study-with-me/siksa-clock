import '@emotion/react';
import { colors } from '../styles/palette';

declare module '@emotion/react' {
  interface Theme {
    colors: colors;
  }
}
