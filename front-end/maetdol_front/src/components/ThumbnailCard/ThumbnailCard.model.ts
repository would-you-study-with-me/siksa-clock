import { IconFileNames } from 'components';

export enum Congestion {
  CROWDED = 'crowded',
  NORMAL = 'normal',
  SMOOTH = 'smooth',
}

export const CongestionIconMap = {
  [Congestion.CROWDED]: IconFileNames.FACE_GOOD,
  [Congestion.NORMAL]: IconFileNames.FACE_NORMAL,
  [Congestion.SMOOTH]: IconFileNames.FACE_BAD,
};
