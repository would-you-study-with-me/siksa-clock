import { createTheme } from '@mui/material/styles';
import Colors from './Colors';

const customTheme = createTheme({
  palette: {
    primary: {
      light: Colors.primaryLight,
      main: Colors.primaryRed,
      dark: Colors.primaryDark,
    },
    success: {
      main: Colors.green,
    },
    warning: {
      main: Colors.yellow,
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'NanumGothic',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 14,
    h1: {
      fontSize: '1.714rem', // 24px
      lineHeight: 2,
    },
    h2: {
      fontSize: '1.286rem', // 18px
      lineHeight: 1.5,
    },
    h4: {
      fontSize: '1.143rem', // 16px
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.143,
    },
    body2: {
      fontSize: '0.857rem', // 12px
      lineHeight: 1,
    },
    button: {
      fontSize: '1rem',
      lineHeight: 1.143,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: '0.714rem',
      lineHeight: 0.857,
      fontWeight: 300,
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default customTheme;
