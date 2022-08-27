interface ConstructorProps {
  oncomplete?(data): void;
  onresize?(size: { width: number; height: number }): void;
  onclose?(state: 'FORCE_CLOSE' | 'COMPLETE_CLOSE'): void;
  /**
   * q: 검색창에 입력된 검색어
   * count: 검색결과의 총 갯수
   */
  onsearch?(data: { q: string; count: number }): void;
  width?: number;
  height: number;
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

declare namespace daum {
  class Postcode {
    constructor(props: ConstructorProps);

    open(param: {
      q?: string;
      left?: number;
      top?: number;
      popupTitle?: string;
      popupKey?: string;
      autoClose?: boolean;
    });

    embed(param: { q?: string; autoClose?: boolean });
  }
}
