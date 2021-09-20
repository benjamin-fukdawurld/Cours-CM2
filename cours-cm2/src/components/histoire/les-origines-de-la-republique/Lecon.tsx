import React from "react";

import PageTitre from "./PageTitre";
import PageRappel from "./PageRappel";
import Partie1 from "./Partie1";
import Partie2 from "./Partie2";
import Resume from "./Resume";

export default function Lecon(props: any) {
  return (
    <React.Fragment>
      <PageTitre />
      <PageRappel />
      <Partie1 />
      <Partie2 />
      <Resume />
    </React.Fragment>
  );
}
