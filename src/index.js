import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import App from "./App.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import theme from "./styles/theme.js";
import GlobalProvider from "./context/darkModeContext";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ThemeProvider>
  </>,
  document.querySelector("#root")
);
