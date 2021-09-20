import styled from "styled-components";
import React from "react";

const HorizontalDividerCell = styled.td`
  border-top: solid 2px black;
  height: 4px;
  width: 100%;
`;

export function HorizontalDivider(props: { length: number }) {
  return (
    <tr>
      <HorizontalDividerCell colSpan={props.length + 2} />
    </tr>
  );
}

const VerticalDividerCell = styled.td`
  border-right: solid 2px black;
  width: 4px;
  height: 100%;
`;

export function VerticalDivider(props: { length: number }) {
  return (
    <tr>
      <VerticalDividerCell rowSpan={props.length} />
    </tr>
  );
}
