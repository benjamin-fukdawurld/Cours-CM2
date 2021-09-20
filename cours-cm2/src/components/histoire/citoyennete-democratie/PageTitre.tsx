import React from "react";
import Typography from "@material-ui/core/Typography";

import { Page, Title } from "../../common";

export default function PageTitre(props: any) {
  return (
    <Page>
      <Title>La République française</Title>
      <Typography
        style={{
          marginTop: "4rem",
          padding: "1.5rem",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        citoyenneté et démocratie
      </Typography>
    </Page>
  );
}
