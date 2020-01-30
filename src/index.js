import React from "react";
import "normalize.css";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";
// import { postcssNormalize } from 'postcss-normalize'
// import * as css from './App.css'

// postcssNormalize.process( css /*, processOptions, pluginOptions */)
 
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
