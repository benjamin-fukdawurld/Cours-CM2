import { alpha, Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";

import HelpTwoToneIcon from "@material-ui/icons/HelpTwoTone";
import { green } from "@material-ui/core/colors";

export interface QuestionProperties {
  title: string;
  children: React.ReactChild | React.ReactChild[];
}

export default function Question(props: any) {
  return (
    <Card style={{ margin: "1rem" }}>
      <CardHeader
        style={{
          color: green[700],
          backgroundColor: alpha(green[200], 0.3),
        }}
        avatar={<HelpTwoToneIcon />}
        title={`Question : ${props.title}`}
      />
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}
