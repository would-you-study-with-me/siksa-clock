import { useCallback } from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';

export const Postcode = (props: any) => {
  let address = '';
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
    address = fullAddress;
  };

  const goHome = useCallback(() => {
    navigate('/', {
      state: {
        address,
      },
    });
  }, [address, navigate]);

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
