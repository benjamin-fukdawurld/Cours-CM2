import { alpha, Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";

import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import { blue } from "@material-ui/core/colors";

export interface InformationProperties {
  title: string;
  children: React.ReactChild | React.ReactChild[];
}

export default function Information(props: any) {
  return (
    <Card style={{ margin: "1rem" }}>
      <CardHeader
        style={{
          color: blue[700],
          backgroundColor: alpha(blue[200], 0.3),
        }}
        avatar={<CheckCircleTwoToneIcon />}
        title={`Information : ${props.title}`}
      />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
