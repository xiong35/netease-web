import "./styles/index.scss";
import "./mobx";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
