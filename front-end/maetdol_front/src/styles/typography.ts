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
