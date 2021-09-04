import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Introduction from "./Introduction";
import TempsDeLaRepublique from "./les-origines-de-la-republique";

export default function Histoire(props: any) {
  return (
    <Router>
      <Switch>
        <Route path="/histoire/origine-de-la-republique">
          <TempsDeLaRepublique />
        </Route>
        <Route path="/histoire">
          <Introduction />
        </Route>
      </Switch>
    </Router>
  );
}
