import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { firebase } from "./firebase";
import store from "./core/store";
import { login, signIn } from "./core/auth/actions";

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user));
    ReactDOM.render(<App />, document.getElementById("root"));
  } else {
    ReactDOM.render(<Login />, document.getElementById("root"));
  }
});

const Login = () => (
  <button onClick={() => store.dispatch(signIn())}> Login </button>
);
