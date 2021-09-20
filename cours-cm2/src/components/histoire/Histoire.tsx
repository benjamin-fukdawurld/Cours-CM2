import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Introduction from "./Introduction";
import OriginesDeLaRepublique from "./les-origines-de-la-republique";
import CitoyenneteEtDemocratie from "./citoyennete-democratie";
import EmpireColonial from "./empire-colonial";

import JulesFerry from "./jules-ferry";

export default function Histoire(props: any) {
  return (
    <Router>
      <Switch>
        <Route path="/histoire/origine-de-la-republique">
          <OriginesDeLaRepublique />
        </Route>
        <Route path="/histoire/citoyennete-democratie">
          <CitoyenneteEtDemocratie />
        </Route>
        <Route path="/histoire/jules-ferry">
          <JulesFerry />
        </Route>
        <Route path="/histoire/empire-colonial">
          <EmpireColonial />
        </Route>
        <Route path="/histoire">
          <Introduction />
        </Route>
      </Switch>
    </Router>
  );
}
