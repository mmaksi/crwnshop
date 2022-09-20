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
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./root.saga";

const sagaMiddleware = createSagaMiddleware()

const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);

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

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

// 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
// pk_live_51LCSujIQ6NhGaIocm0HXUhMlGiyXrrwrX05vd8sMvsWZYBCN0nZ5WkLzuTTC6WpuOONyhjmMC5Jk53wI5ogzW6uK00OLG6VwE0