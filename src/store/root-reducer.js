import { combineReducers } from 'redux';
// import { categoryReducer } from './category/category.reducer';

import { userReducer } from './user/user.reducer';

// the key is the reducer slice and the value is the reducer function
export const rootReducer = combineReducers({
  user: userReducer,
  // categories: categoryReducer
});
