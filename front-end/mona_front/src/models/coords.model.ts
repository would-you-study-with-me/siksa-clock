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

type Coords = {
  crs: string;
  x: number;
  y: number;
};

type Region = {
  area1?: { name: string; coords: Coords; alias?: string };
  area2?: { name: string; coords: Coords; alias?: string };
  area3?: { name: string; coords: Coords; alias?: string };
  area4?: { name: string; coords: Coords; alias?: string };
};

export interface CoordsResultItem {
  name: string;
  code: CodeItem;
  land?: Land;
  region?: Region;
}
