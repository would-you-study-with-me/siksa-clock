import { Detail, Home } from 'pages';
import { Route, Routes } from 'react-router-dom';

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:restaurantId" element={<Detail />} />
    </Routes>
  );
}
