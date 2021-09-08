import React from 'react';

interface CellProperties {
  pre?: React.ReactNode | string;
  post?: React.ReactNode | string;
  value?: React.ReactNode | string;
}

function Cell(props: CellProperties) {
  return (
    <td>
      {props.pre && props.pre}
      {props.value && props.value}
      {props.post && props.post}
    </td>
  );
}

interface RowProperties {
  sign?: CellProperties;
  length: number;
  values: CellProperties[];
}

function Row(props: RowProperties) {
  return (
    <tr>
      {props.sign ? <Cell {...props.sign} /> : <Cell />}
      <Cell />
      {props.values.map((cell: CellProperties) => (
        <Cell {...cell} />
      ))}
    </tr>
  );
}

interface TableProperties {
  sign?: CellProperties;
  length: number;
  values: CellProperties[][];
  result?: CellProperties[];
}

function Table(props: TableProperties) {
  return (
    <table>
      {props.values.map((value: CellProperties[], index: number) => {
        return (
          <Row
            sign={index === props.values.length - 1 ? props.sign : undefined}
            values={value}
            length={props.length}
          />
        );
      })}
      <tfoot>
        <Row
          values={
            props.result
              ? props.result
              : [...Array(props.length)].map(
                  (val: undefined): CellProperties => ({})
                )
          }
          length={props.length}
        />
      </tfoot>
    </table>
  );
}

export interface OperationProperties {
  sign: string;
  values: number[];
}

export default function Operation(props: OperationProperties) {
  if (props.values.length < 2) {
    throw new Error(
      `Operation requires at least 2 values, received '${props.values.length}'`
    );
  }

  const valueStrs = props.values.map((val: number) => val.toString());
  const values: CellProperties[][] = valueStrs.map(
    (val: string): CellProperties[] => [
      ...val.split('').map(
        (str: string): CellProperties => ({
          value: str,
        })
      ),
    ]
  );

  const result = props.values
    .reduce((total: number, current: number): number => total + current)
    .toString()
    .split('')
    .map((char: string) => ({ value: char }));

  const len = valueStrs.reduce((max: number, str: string) => {
    const current = str.length;
    if (max < current) {
      return current;
    }

    return max;
  }, valueStrs[0].length);

  return (
    <Table
      values={values}
      length={len}
      sign={{ value: props.sign }}
      result={result}
    />
  );
}
