import { Theme } from '@emotion/react';

const FONT_FAMILY = 'font-family: Roboto, NanumGothic, sans-serif;';

const typography = {
  head1: `
    ${FONT_FAMILY} 
    font-size: 2.4rem; 
    font-weight: 600;
    `,
  head2: `
    ${FONT_FAMILY} 
    font-size: 1.8rem; 
    font-weight: 600;
    `,
  title1: `
    ${FONT_FAMILY} 
    font-size: 1.6rem; 
    font-weight: 600;
    `,
  body1: `
    ${FONT_FAMILY} 
    font-size: 1.4rem; 
    font-weight: 400;
    `,
  body2: `
    ${FONT_FAMILY} 
    font-size: 1.2rem; 
    font-weight: 300;
    `,
  caption: `
    ${FONT_FAMILY} 
    font-size: 1rem; 
    font-weight: 300;
    `,
  placeholder: `
    ${FONT_FAMILY} 
    font-size: 1rem; 
    font-weight: 300;
    `,
  button: `
    ${FONT_FAMILY}
    font-size: 1.4rem;
    font-weight: 600;
  `,
} as const;

export default typography;
export type typography = typeof typography;
export type Typography = typeof typography[keyof typeof typography];

export const Typography: {
  [k in keyof typography]: (p: { theme: Theme }) => typography[k];
} = {
  body1: () => typography.body1,
  body2: () => typography.body2,
  button: () => typography.button,
  caption: () => typography.caption,
  head1: () => typography.head1,
  head2: () => typography.head2,
  placeholder: () => typography.placeholder,
  title1: () => typography.title1,
} as const;
