import { CellProperties } from "./interfaces/CellProperties";

export function Cell(props: CellProperties) {
  return (
    <td className={`${props.active ? "active" : ""}`}>
      {props.pre && props.pre}
      {props.value && props.value}
      {props.post && props.post}
    </td>
  );
}
