const customLoggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  // This code runs before the action hits the root reducer and updates the state
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);
  // This code runs after the action hits the root reducer and updates the state and runs all selectors
  console.log("next state: ", store.getState());
};

export default customLoggerMiddleware