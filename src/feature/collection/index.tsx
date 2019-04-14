import React from "react";
import { Switch } from "react-router";
import PrivateRoute from "../_shared/PrivateRoute";
import EditCollection from "./edit/EditCollection";
import CreateCollection from "./create/CreateCollection";

export default () => (
  <Switch>
    <PrivateRoute path="/collection/edit/:id" component={EditCollection} />
    <PrivateRoute
      path="/collection/create"
      exact
      component={CreateCollection}
    />
  </Switch>
);
