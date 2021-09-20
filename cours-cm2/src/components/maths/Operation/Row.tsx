import React from "react";
import { Cell } from "./Cell";
import { CellProperties } from "./interfaces/CellProperties";

export interface RowProperties {
  sign?: CellProperties;
  length: number;
  values: CellProperties[];
}

export function Row(props: RowProperties) {
  return (
    <tr>
      {props.sign ? <Cell {...props.sign} /> : <Cell />}
      <Cell />
      {props.values.map((cell: CellProperties, index: number) => (
        <Cell key={index} {...cell} />
      ))}
    </tr>
  );
}
