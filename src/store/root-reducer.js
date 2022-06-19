import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { cartReducer } from './cart/cart.reducer';

// the key is the reducer slice and the value is the reducer function
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer
});
