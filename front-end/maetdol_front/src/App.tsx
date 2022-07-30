import { ThemeProvider } from '@emotion/react';
import colors from 'styles/palette';
import typography from 'styles/typography';

function App() {
  return (
    <ThemeProvider theme={{ colors, typography }}>
      <div>It works!</div>
    </ThemeProvider>
  );
}

export default App;
