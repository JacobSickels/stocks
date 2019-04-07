import React, { Component } from "react";
import { Switch, Router } from "react-router";
import { Provider } from "react-redux";
import store from "../core/store";
import { createBrowserHistory as createHistory } from "history";
import Login from "./login/Login";
import PublicRoute from "./_shared/PublicRoute";
import PrivateRoute from "./_shared/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <PublicRoute path="/" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
