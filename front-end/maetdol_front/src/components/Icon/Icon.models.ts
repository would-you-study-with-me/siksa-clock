import { Colors } from 'styles/palette';

export const baseIconUrl = `${process.env.PUBLIC_URL}/statics/images/icons`;

export enum IconFileNames {
  ACCOUNT = 'AccountIcon.svg',
  BACK_ARROW = 'BackArrowIcon.svg',
  CALL = 'Call-Icon.svg',
  CLOSE = 'CloseIcon.svg',
  FAVORITE = 'FavoriteIcon.svg',
  HOME = 'MainIcon.svg',
  FACE_BAD = 'MoodBadIcon.svg',
  FACE_GOOD = 'MoodGoodIcon.svg',
  FACE_NORMAL = 'MoodNormalIcon.svg',
  LOCATION_PIN = 'PinIcon.svg',
  PIN = 'PushPinIcon.svg',
  SEARCH = 'SearchIcon.svg',
  SETTING = 'SettingIcon.svg',
  STAR = 'StarIcon.svg',
  STORE = 'StoreIcon.svg',
}

// svg에 적용된 색상 목록. 해당 값을 기준으로 색상을 변경할 수 있다
type DefaultColors = 'black' | 'none';
export type ReplaceColorSet = { [k in DefaultColors]?: Colors };
