import { alpha, Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";

import ErrorTwoToneIcon from "@material-ui/icons/ErrorTwoTone";
import { orange } from "@material-ui/core/colors";

export interface RappelProperties {
  title: string;
  children: React.ReactChild | React.ReactChild[];
}

export default function Rappel(props: any) {
  return (
    <Card style={{ margin: "1rem" }}>
      <CardHeader
        style={{
          color: orange[700],
          backgroundColor: alpha(orange[200], 0.3),
        }}
        avatar={<ErrorTwoToneIcon />}
        title={`Rappel: ${props.title}`}
      />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
