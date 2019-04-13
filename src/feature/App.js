import React, { Component, Suspense } from "react";
import { Switch, Router, Route } from "react-router";
import { Provider } from "react-redux";
import store from "../core/store";
import { createBrowserHistory as createHistory } from "history";
import Login from "./login/Login";
import PublicRoute from "./_shared/PublicRoute";
import PrivateRoute from "./_shared/PrivateRoute";
import Dashboard from "./dashboard/Dashboard";
import { Loader } from "semantic-ui-react";
import Collection from "./collection/Collection";

export const history = createHistory();

const AsyncBrowse = React.lazy(() => import("./browse"));
const AsyncCollection = React.lazy(() => import("./collection"));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute path="/" exact component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/collection" component={AsyncCollection} />
              <Route path="/browse" component={AsyncBrowse} />
            </Switch>
          </Suspense>
          <Collection />
        </Router>
      </Provider>
    );
  }
}

export default App;
