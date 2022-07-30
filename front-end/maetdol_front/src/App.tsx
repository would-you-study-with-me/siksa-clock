import globalStyle from 'styles/global';
import colors from 'styles/palette';
import typography from 'styles/typography';

function App() {
  return (
    <ThemeProvider theme={{ colors, typography }}>
      <Global styles={globalStyle} />
      <div>It works!</div>
    </ThemeProvider>
  );
}

export default App;
