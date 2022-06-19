import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectCartIsOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartIsOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalQuantity, newCartItem) => totalQuantity + newCartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalQuantity, newCartItem) =>
      totalQuantity + newCartItem.quantity * newCartItem.price,
    0
  )
);
