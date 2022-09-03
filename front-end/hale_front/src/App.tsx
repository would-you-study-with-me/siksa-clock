import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import theme from './assets/theme';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
