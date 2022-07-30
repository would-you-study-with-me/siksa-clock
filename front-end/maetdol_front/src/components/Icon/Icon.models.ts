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

export type UsedColors = 'black' | 'none';
export type ReplaceColorSet = { [k in UsedColors]?: Colors };
