import { useCallback } from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';

export const Postcode = (props: any) => {
  let address = '';
  let bcode = ''; // 법정동코드
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
    bcode = data.bcode;
    address = fullAddress;
  };

  const goHome = useCallback(() => {
    navigate('/', {
      state: {
        address,
        bcode,
      },
    });
  }, [address, bcode, navigate]);

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
