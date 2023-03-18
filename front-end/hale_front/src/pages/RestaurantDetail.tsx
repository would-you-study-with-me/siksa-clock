import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RestaurantDetailInfo from 'model/restaurant.interface';

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantDetailInfo>();

  const back = () => {
    navigate('/');
  };
  return (
    <div>
      <button type="button" onClick={back}>
        뒤로가기
      </button>
      <div>{restaurantId}</div>
      <div>This is RestaurantDetail page.</div>
    </div>
  );
};

export default RestaurantDetail;
