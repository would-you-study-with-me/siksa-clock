import { createTheme } from '@mui/material/styles';
import Colors from '../styles/Colors';

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
      fontSize: '1.714rem',
      lineHeight: 2,
    },
    h2: {
      fontSize: '1.286rem',
      lineHeight: 1.5,
    },
  },
});
