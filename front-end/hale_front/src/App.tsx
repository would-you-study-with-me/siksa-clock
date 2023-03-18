import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import theme from './assets/theme';
import Main from './pages/Main';
import PostCode from './pages/PostCode';
import Error from './pages/Error';
import RestaurantDetail from './pages/RestaurantDetail';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
      errorElement: <Error />,
    },
    {
      path: 'postcode',
      element: <PostCode />,
    },
    {
      path: 'restaurants/:restaurantId',
      element: <RestaurantDetail />,
    },
  ],
  { basename: process.env.REACT_APP_HALE_BASENAME },
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
