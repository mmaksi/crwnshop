import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartProvider } from "./contexts/cart.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { store } from "./store/store";

import "./index.scss";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
