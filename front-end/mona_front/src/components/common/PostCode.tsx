import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';

export const Postcode = (props: any) => {
  const navigate = useNavigate();
  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        onClose={goHome}
        {...props}
      />
    </div>
  );
};
