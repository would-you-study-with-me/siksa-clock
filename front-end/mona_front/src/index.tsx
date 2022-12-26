import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const restaurauntLink = new HttpLink({
  uri: 'http://web.siksa-clock.kro.kr/restaurant',
});
const geocodingLink = new HttpLink({
  uri: 'http://web.siksa-clock.kro.kr/coords',
});
const client = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === 'restaurant',
    restaurauntLink, // if above
    geocodingLink,
  ),
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
