import React from "react";
import { CellProperties } from "./interfaces/CellProperties";
import { Row } from "./Row";
import { HorizontalDivider } from "./Divider";
import { LayoutProperties } from "./interfaces/LayoutProperties";

export function TableLayout(props: LayoutProperties) {
  return (
    <table>
      <tbody>
        {props.values.map((value: CellProperties[], index: number) => {
          return (
            <Row
              key={index}
              sign={index === props.values.length - 1 ? props.sign : undefined}
              values={value}
              length={props.columns}
            />
          );
        })}
        <HorizontalDivider length={props.columns} />
        <Row
          values={
            props.result
              ? props.result
              : [...Array(props.columns)].map((val: undefined): CellProperties => ({}))
          }
          length={props.columns}
        />
      </tbody>
    </table>
  );
}
