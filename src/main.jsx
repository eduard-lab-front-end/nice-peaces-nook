import React from "react";
import "./styles/global.css";
import "@mantine/carousel/styles.css";
import App from "./App.jsx";

import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import theme from "./styles/theme.js";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./providers/StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <App />
        </MantineProvider>
      </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>
);
