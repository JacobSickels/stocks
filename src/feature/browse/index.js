import * as React from "react";
import { Switch } from "react-router-dom";
import Browse from "./Browse";
import Stock from "./Stock";
import PrivateRoute from "../_shared/PrivateRoute";

export default () => (
  <Switch>
    <PrivateRoute path="/browse/:id" component={Stock} />
    <PrivateRoute path="/browse" exact component={Browse} />
  </Switch>
);
