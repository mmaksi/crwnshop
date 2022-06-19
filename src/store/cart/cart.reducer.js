import CART_ACTION_TYPES from './cart.types';

const CART_INITIAL_STATE = {
  cartIsOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {} ) => {
  switch (action.type) {
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        cartIsOpen: action.payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      throw new Error(`Unhandled error type ${action.type} in userReducer`);
  }
};
