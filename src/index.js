import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { api } from "./api/api";

api.get(`/stock/AAPL/quote`).then(response => console.log(response));

ReactDOM.render(<App />, document.getElementById("root"));
