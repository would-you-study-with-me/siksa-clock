import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import TestComponent from './pages/TestComponent';
import customTheme from './assets/styles/CustomTheme';

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <TestComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
