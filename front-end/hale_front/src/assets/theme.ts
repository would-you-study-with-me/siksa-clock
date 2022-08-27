import { createTheme } from '@mui/material/styles';
import COLORS from './color';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: COLORS.primaryLight,
      main: COLORS.primaryRed,
      dark: COLORS.primaryDark,
    },
    secondary: {
      main: COLORS.green,
    },
    error: {
      main: COLORS.yellow,
    },
  },
  typography: {
    fontFamily: ['Roboto', 'NanumGothic'].join(','),

    // 한글 헤드 1
    h1: {
      fontWeight: 600,
      fontSize: '1.5rem', // 24px
      lineHeight: '1.5rem', // 24px
    },

    // 한글 헤드 2
    h2: {
      fontWeight: 700,
      fontSize: '1.125rem', // 18px
      lineHeight: '1.125rem', // 18px
    },

    // 한글 제목
    subtitle1: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1rem',
    },

    // 한글 본문 1
    body1: {
      fontWeight: 400,
      fontSize: '0.875rem', // 14px
      lineHeight: '0.875rem', // 14px
    },

    // 한글 본문 2
    body2: {
      fontWeight: 400,
      fontSize: '0.75rem', // 12px
      lineHeight: '0.75rem', // 12px
    },

    // 한글 버튼
    button: {
      fontWeight: 700,
      fontSize: '0.875rem', // 14px
      lineHeight: '0.875rem', // 14px
    },

    // 한글 주석 1
    caption: {
      fontWeight: 400,
      fontSize: '0.625rem', // 10px
      lineHeight: '0.625rem', // 10px
    },

    // 한글 주석 2
    overline: {
      fontWeight: 400,
      fontSize: '0.625rem',
      lineHeight: '0.625rem',
    },
  },
});

export default theme;
