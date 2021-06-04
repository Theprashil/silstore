import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalState from "./store/CartProvider";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalState>
      <App />
    </GlobalState>
  </ThemeProvider>,
  document.getElementById("root")
);
