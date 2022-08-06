import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Header from '../components/common/Header';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
