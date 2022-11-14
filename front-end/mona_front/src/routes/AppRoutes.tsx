import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import { Postcode } from '../components/common/PostCode';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<Postcode />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
