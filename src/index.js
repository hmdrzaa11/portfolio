import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import theme from "./styles/theme.js";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </>,
  document.querySelector("#root")
);
