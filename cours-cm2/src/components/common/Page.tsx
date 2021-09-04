import React from "react";
import Paper from "@material-ui/core/Paper";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      margin: "auto",
      maxWidth: "960px",
      minHeight: "50rem",

      marginTop: theme.spacing(8),
      borderRadius: theme.spacing(1),
      padding: theme.spacing(16, 12),
    },
  })
);

export interface PageProperties {
  children: React.ReactChild | React.ReactChild[];
}

export default function Page(props: PageProperties): JSX.Element {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      {props.children}
    </Paper>
  );
}
