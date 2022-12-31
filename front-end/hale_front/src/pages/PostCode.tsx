import { useNavigate } from 'react-router-dom';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

const PostCode = () => {
  const navigate = useNavigate();

  const handleComplete = (data: Address) => {
    console.log(data.roadname);
    navigate('/', { state: { roadname: data.roadname } });
  };

  const back = () => {
    navigate('/');
  };

  return (
    <div id="postcode">
      <button type="button" onClick={back}>
        뒤로가기
      </button>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </div>
  );
};

export default PostCode;
