import { ReactNode, useState } from "react";
import { CellProperties } from "./interfaces/CellProperties";
import { TableLayout } from "./TableLayout";

import styled from "styled-components";

const OperationContainer = styled.div`
  & .active {
    color: red;
  }
`;

interface OperationProcessor {
  process: (sign: string, values: number[]) => number;
  step?: (
    sign: string,
    values: CellProperties[][],
    result: CellProperties[],
    operationState: any,
    cb: (values: CellProperties[][], result: CellProperties[], state: any) => void
  ) => any;
  support?: (sign: string) => boolean;
  resultRenderer?: (result: number) => ReactNode | string;
}

export interface OperationProperties {
  sign: string;
  values: number[];
  processor: OperationProcessor;
  activeIndices?: [number, number][];
  autoProcess?: boolean;
}

export default function Operation(props: OperationProperties) {
  if (props.values.length < 2) {
    throw new Error(`Operation requires at least 2 values, received '${props.values.length}'`);
  }

  const valueStrs = props.values.map((val: number) => val.toString());
  const [values, setValues] = useState<CellProperties[][]>(
    valueStrs.map((val: string, row: number): CellProperties[] => [
      ...val.split("").map(
        (str: string, column: number): CellProperties => ({
          value: str,
          active: !!props.activeIndices?.find(
            (pos: [number, number]) => pos[0] === row && pos[1] === column
          ),
        })
      ),
    ])
  );

  const [processorState, setProcessorState] = useState<any>({ index: 0 });
  const [result, setResult] = useState<CellProperties[]>(
    props.autoProcess
      ? props.processor
          .process(props.sign, props.values)
          .toString()
          .split("")
          .map((char: string) => ({ value: char }))
      : []
  );

  const len = valueStrs.reduce((max: number, str: string) => {
    const current = str.length;
    if (max < current) {
      return current;
    }

    return max;
  }, valueStrs[0].length);

  return (
    <OperationContainer
      onClick={() => {
        if (!props.processor.step) {
          return;
        }

        props.processor.step(
          props.sign,
          values,
          result,
          processorState,
          (values: CellProperties[][], result: CellProperties[], state: any) => {
            setValues(values);
            setProcessorState(state);
            setResult(result);
          }
        );
      }}
    >
      <TableLayout values={values} columns={len} sign={{ value: props.sign }} result={result} />
    </OperationContainer>
  );
}
