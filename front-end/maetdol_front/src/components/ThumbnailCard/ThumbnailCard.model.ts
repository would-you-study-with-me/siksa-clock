import { IconFileNames } from 'components';

export enum Congestion {
  CROWDED = '혼잡',
  NORMAL = '보통',
  SMOOTH = '원활',
}

export const CongestionIconMap = {
  [Congestion.CROWDED]: IconFileNames.FACE_GOOD,
  [Congestion.NORMAL]: IconFileNames.FACE_NORMAL,
  [Congestion.SMOOTH]: IconFileNames.FACE_BAD,
};
