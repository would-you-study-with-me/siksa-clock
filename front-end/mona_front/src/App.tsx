import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './assets/styles/CustomTheme';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
