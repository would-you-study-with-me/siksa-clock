const ROBOTO = 'font-family: Roboto sans-serif;';
const NANUM_GOTHIC = 'font-family: NanumGothic sans-serif;';

const english = {
  head1: `
    ${ROBOTO} 
    font-size: 2.4rem; 
    line-height: 1.5; 
    font-weight: 600;
    `,
  head2: `
    ${ROBOTO} 
    font-size: 1.8rem; 
    line-height: 1.5; 
    font-weight: 600;
    `,
  title1: `
    ${ROBOTO} 
    font-size: 1.6rem; 
    line-height: 1.5; 
    font-weight: 600;
    `,
  body1: `
    ${ROBOTO} 
    font-size: 1.4rem; 
    line-height: 1.5; 
    font-weight: 400;
    `,
  body2: `
    ${ROBOTO} 
    font-size: 1.2rem; 
    line-height: 1.5; 
    font-weight: 300;
    `,
  caption: `
    ${ROBOTO} 
    font-size: 1rem; 
    line-height: 1.5; 
    font-weight: 300;
    `,
  placeholder: `
    ${ROBOTO} 
    font-size: 1rem; 
    line-height: 1.5; 
    font-weight: 300;
    `,
  button: `
    ${ROBOTO}
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 600;
  `,
} as const;

const korean = {
  head1: `
    ${NANUM_GOTHIC} 
    font-size: 2.4rem; 
    line-height: 1.5; 
    font-weight: 600;
    `,
  head2: `
    ${NANUM_GOTHIC} 
    font-size: 1.8rem; 
    line-height: 1.5; 
    font-weight: 600;
    `,
  title1: `
    ${NANUM_GOTHIC} 
    font-size: 1.6rem; 
    line-height: 1.5; 
    font-weight: 600;
    `,
  body1: `
    ${NANUM_GOTHIC} 
    font-size: 1.4rem; 
    line-height: 1.5; 
    font-weight: 400;
    `,
  body2: `
    ${NANUM_GOTHIC} 
    font-size: 1.2rem; 
    line-height: 1.5; 
    font-weight: 400;
    `,
  caption: `
    ${NANUM_GOTHIC} 
    font-size: 1rem; 
    line-height: 1.5; 
    font-weight: 400;
    `,
  placeholder: `
    ${NANUM_GOTHIC} 
    font-size: 1rem; 
    line-height: 1.5; 
    font-weight: 400;
    `,
  button: `
    ${NANUM_GOTHIC}
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 600;
  `,
} as const;

const typography = {
  english,
  korean,
};

export default typography;
export type typography = typeof typography;
