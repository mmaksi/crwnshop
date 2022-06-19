/**
 * the store is where we store the state
 * and recieve and dispatch actions
 */

import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import customLoggerMiddleware from "./middleware/logger";

import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const middleWares = [process.env.NODE_ENV !== "production" && logger, thunk].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// will use redux Dev Tools chrome extension only in development mode
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; 

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
