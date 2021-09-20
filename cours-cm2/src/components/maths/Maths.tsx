import React from "react";
import Operation from "./Operation";
import { CellProperties } from "./Operation/interfaces/CellProperties";

type Function = (values: number[], data?: any) => number;
interface FunctionMap {
  [sign: string]: Function;
}

const functions = new Proxy<FunctionMap>(
  {},
  {
    get: function (obj: {}, prop: string): Function {
      switch (prop) {
        case "+":
          return (values: number[], data?: any): number =>
            values.reduce((total: number, current: number): number => total + current, 0);
        case "-":
          return (values: number[], data?: any): number =>
            values
              .slice(1)
              .reduce((total: number, current: number): number => total - current, values[0]);

        case "*":
          return (values: number[], data?: any): number =>
            values
              .slice(1)
              .reduce((total: number, current: number): number => total * current, values[0]);

        case "/":
          return (values: number[], data?: any): number =>
            values
              .slice(1)
              .reduce((total: number, current: number): number => total / current, values[0]);

        default:
          throw new Error(`unsupported operator '${prop}'`);
      }
    },
  }
);

const processor = {
  process: (sign: string, values: number[]): number => {
    return (functions[sign] as Function)(values);
  },
  step: (
    sign: string,
    values: CellProperties[][],
    result: CellProperties[],
    state: any,
    cb: (values: CellProperties[][], result: CellProperties[], state: any) => void
  ): any => {
    let index = state.index ?? 0;
    const column = values[0].length - Math.floor(index) - 1;
    const cells = values
      .map((valueCells: CellProperties[], row: number) => valueCells[column])
      .filter((value: CellProperties, currentIndex: number) => currentIndex === column);

    cells.forEach((cell: CellProperties) => {
      cell.active = true;
      return cell;
    });

    cb(values, result, { index });
  },
  support: (sign: string): boolean => ["+", "-", "*", "/"].includes(sign),
};

export default function Maths(props: any) {
  return <Operation sign="-" values={[33, 21]} processor={processor} />;
}
