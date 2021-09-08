import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ThemeProvider from "@material-ui/styles/ThemeProvider";

import theme from "./Theme";

import Sommaire from "./components/Sommaire";
import Histoire from "./components/histoire/Histoire";
import Maths from "./components/maths/Maths";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Sommaire />
          </Route>
          <Route path="/histoire">
            <Histoire />
          </Route>
          <Route path="/maths">
            <Maths />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
