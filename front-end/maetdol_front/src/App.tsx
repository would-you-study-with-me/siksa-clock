import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Global, ThemeProvider } from '@emotion/react';
import { HeaderWithBackButton } from 'components';
import { Home } from 'pages/Home/Home.page';
import { BrowserRouter } from 'react-router-dom';
import globalStyle from 'styles/global';
import colors from 'styles/palette';
import typography from 'styles/typography';

const client = new ApolloClient({
  uri: 'http://web.siksa-clock.kro.kr/restaurant',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{ colors, typography }}>
        <Global styles={globalStyle} />
        <BrowserRouter>
          <HeaderWithBackButton />
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
