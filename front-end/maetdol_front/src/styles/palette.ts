const colors = {
  fontBlack: '#212121',
  gray: '#B7B7B7',
  white: '#F2F2F2',
  primaryRed: '#E42021',
  primaryLight: '#F56566',
  primaryDark: '#C80C0D',
  green: '#4EC03B',
  yellow: '#EDD068',
} as const;

export default colors;
export type colors = typeof colors;
export type Colors = typeof colors[keyof typeof colors];
