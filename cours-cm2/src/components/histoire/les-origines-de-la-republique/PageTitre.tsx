import React from "react";
import Typography from "@material-ui/core/Typography";

import { Page, Title } from "../../common";

export default function PageTitre(props: any) {
  return (
    <Page>
      <Title>Les origines de la République</Title>
      <Typography
        style={{
          marginTop: "4rem",
          padding: "1.5rem",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        De la Révolution au régime de Vichy
      </Typography>
      <Typography
        style={{
          marginTop: "4rem",
          padding: "1.5rem",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Savez-vous quels sont les différents régimes politiques qui se sont succédé en France depuis
        1815 ?
      </Typography>
    </Page>
  );
}
