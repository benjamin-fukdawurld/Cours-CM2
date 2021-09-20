import { CellProperties } from "./CellProperties";

export interface LayoutProperties {
  sign?: CellProperties;
  columns: number;
  values: CellProperties[][];
  result?: CellProperties[];
}
