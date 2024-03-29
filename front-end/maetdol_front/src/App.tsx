import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Global, ThemeProvider } from '@emotion/react';
import { Env } from 'constants/';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from 'routing';
import globalStyle from 'styles/global';
import colors from 'styles/palette';
import typography from 'styles/typography';
import { GlobalContextProvider } from './global-context';

const client = new ApolloClient({
  uri: 'https://web.siksa-clock.kro.kr/restaurant',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{ colors, typography }}>
        <GlobalContextProvider>
          <Global styles={globalStyle} />
          <BrowserRouter basename={Env.BASENAME}>
            <Routing />
          </BrowserRouter>
        </GlobalContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
