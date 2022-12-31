import { useNavigate } from 'react-router-dom';

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  };
  return (
    <div>
      <button type="button" onClick={back}>
        뒤로가기
      </button>
      <div>This is RestaurantDetail page.</div>
    </div>
  );
};

export default RestaurantDetail;
