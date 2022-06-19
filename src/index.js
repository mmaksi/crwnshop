import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.scss";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
            <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
