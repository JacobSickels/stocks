import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./feature/App";
import { firebase } from "./firebase";
import store from "./core/store";
import { login, logout } from "./core/auth/actions";

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user));
  } else {
    store.dispatch(logout());
  }
  ReactDOM.render(<App />, document.getElementById("root"));
});
