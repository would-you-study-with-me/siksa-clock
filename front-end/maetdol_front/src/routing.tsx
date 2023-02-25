import { Home, RestaurantDetail } from 'pages';
import { Route, Routes } from 'react-router-dom';

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:restaurantId" element={<RestaurantDetail />} />
    </Routes>
  );
}
