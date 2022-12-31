import { useCallback, useMemo } from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import { AddressData } from '../../models/address.model';

export const Postcode = (props: any) => {
  const addressData: AddressData = useMemo(
    () => ({
      address: '',
      sigungu: '',
      roadname: '',
    }),
    [],
  );
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
    addressData.address = fullAddress;
    addressData.sigungu = data.sigungu;
    addressData.roadname = data.roadname;
  };

  const goHome = useCallback(() => {
    navigate('/', {
      state: { ...addressData },
    });
  }, [navigate, addressData]);

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
