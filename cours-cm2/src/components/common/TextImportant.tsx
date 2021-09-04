import { TypographyProps } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

export interface BaseTextImportantProperties {
  children: React.ReactChild | React.ReactChildren | string;
}

type TextImportantProperties = TypographyProps;

export default function TextImportant(props: TextImportantProperties) {
  return (
    <Typography
      color="secondary"
      style={{
        display: "inline",
        fontWeight: 700,
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
}
