/** 주소 타입. R: 도로명 / J: 지번 */
type AddressType = 'R' | 'J';

/** Yes / No */
type YN = 'Y' | 'N';

type AddressData = {
  zonecode: `${number}`;
  address: string;
  addressEnglish: string;
  /** R: 도로명 / J: 지번 */
  addressType: AddressType;
  userSelectedType: AddressType;
  noSelected: YN;
  /** K: korean / E: English */
  useLanguageType: 'K' | 'E';
  roadAddress: string;
  roadAddressEnglish: string;
  jibunAddress: string;
  jibunAddressEnglish: string;
  autoRoadAddress: string;
  autoRoadAddressEnglish: string;
  autoJibunAddress: string;
  autoJibunAddressEnglish: string;
  buildingCode: string;
  buildingName: string;
  apartment: YN;
  sido: string;
  sidoEnglish: string;
  sigungu: string;
  sigunguEnglish: string;
  sigunguCode: string;
  roadnameCode: string;
  bcode: string;
  roadname: string;
  roadnameEnglish: string;
  bname: string;
  bnameEnglish: string;
  bname1: string;
  bname2: string;
  bname2English: string;
  hname: string;
  query: string;
  /** @deprecated */
  postcode: string;
  /** @deprecated */
  postcode1: string;
  /** @deprecated */
  postcode2: string;
  /** @deprecated */
  postcodeSeq: string;
};

interface ConstructorProps {
  oncomplete?(data: AddressData): void;
  onresize?(size: { width: number; height: number }): void;
  onclose?(state: 'FORCE_CLOSE' | 'COMPLETE_CLOSE'): void;
  /**
   * q: 검색창에 입력된 검색어
   * count: 검색결과의 총 갯수
   */
  onsearch?(data: { q: string; count: number }): void;
  width?: number | `${number}%`;
  height?: number | `${number}%`;
  /** default false */
  animation?: boolean;
  /** default true */
  focusInput?: boolean;
  /** default true */
  autoMappingRoad?: boolean;
  /** default true */
  autoMappingJibun?: boolean;
  /** default true */
  shorthand?: boolean;
  /** 0.1 ~ 60 seconds */
  pleaseReadGuideTimer?: number;
  /** 1 ~ 10 */
  maxSuggestItems?: number;
  /** default false */
  showMoreHName?: boolean;
  /** default false */
  hideMapBtn?: boolean;
  /** default false */
  hideEngBtn?: boolean;
  /** default false */
  alwaysShowEngAddr?: boolean;
  /** default true  */
  submitMode?: boolean;
  /** default true */
  useBannerLink?: boolean;
  /**
   * @deprecated
   *  default true
   * */
  zonecodeOnly?: boolean;
  /** default null */
  theme?: {
    bgColor?: string;
    searchBgColor?: string;
    contentBgColor?: string;
    pageBgColor?: string;
    textColor?: string;
    queryTextColor?: string;
    postcodeTextColor?: string;
    emphTextColor?: string;
    outlineColor?: string;
  };
}

type OpenParameter = {
  q?: string;
  left?: number;
  top?: number;
  popupTitle?: string;
  popupKey?: string;
  autoClose?: boolean;
};

declare namespace daum {
  type ConstructorProp = ConstructorProps;
  type OpenParameter = OpenParameter;

  class Postcode {
    constructor(props?: ConstructorProps);

    open(param?: OpenParameter);

    embed(element: HTMLElement, param?: { q?: string; autoClose?: boolean });
  }
}
