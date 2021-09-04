import { TypographyVariant, TypographyProps } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

export interface BaseTitleProperties {
  children: React.ReactChild | React.ReactChildren | string;
  rank?: number;
}

type TitleProperties = BaseTitleProperties & TypographyProps;

export default function Title(props: TitleProperties): JSX.Element {
  let variant: TypographyVariant = "h1";
  const align = props.align ?? "center";

  const color = props.color ?? "primary";
  if (props.rank && props.rank > 1) {
    switch (props.rank) {
      case 2:
        variant = "h2";
        break;
      case 3:
        variant = "h3";
        break;
      case 4:
        variant = "h4";
        break;
      case 5:
        variant = "h5";
        break;
      default:
        variant = "h6";
        break;
    }
  }

  delete props.align;
  delete props.color;

  return (
    <Typography variant={variant} color={color} align={align} {...props}>
      {props.children}
    </Typography>
  );
}
