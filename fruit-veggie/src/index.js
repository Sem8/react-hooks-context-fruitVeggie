import React, { useState } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./Store";
import "./index.css";

const Index = () => {
  return (
    <Store>
      <App />
    </Store>
  );
};

render(<Index />, document.getElementById("root"));
