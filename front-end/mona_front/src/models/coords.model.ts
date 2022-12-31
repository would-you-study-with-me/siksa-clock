type LoadType = 'L' | 'A';

type CodeItem = {
  id: string;
  mappingId: string;
  type: LoadType;
};

type Land = {
  /** 길 이름 */
  name: string;
  /** 건물이름 */
  number1: string;
  number2: string;
  type: string;
};

export interface CoordsResultItem {
  name: string;
  code: CodeItem;
  land?: Land;
}
