import React from "react";
import ReactDOM from "react-dom";
import "normalize-css";
import App from "./App";
import { TokenProvider } from "./providers/token";

ReactDOM.render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
