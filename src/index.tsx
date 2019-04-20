import React from "react";
import ReactDOM from "react-dom";
import App, { history } from "./feature/App";
import { firebase } from "./firebase";
import store from "./core/store";
import { login, logout } from "./core/auth/actions";

import "semantic-ui-css/semantic.min.css";
import { addSnackbar } from "./core/network/actions";

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user));

    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logout());
  }
  ReactDOM.render(<App />, document.getElementById("root"));
});
