import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js"

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker" 

import "./index.scss";

import { stripePromise } from "./utils/stripe/stripe.utils";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <BrowserRouter >
        <Elements stripe={stripePromise} >
          <App />
        </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

serviceWorker.register()