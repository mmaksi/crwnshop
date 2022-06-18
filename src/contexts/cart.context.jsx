import { useReducer, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => false,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  cartTotal: 0,
  setCartTotal: () => null,
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_OPEN":
      return {
        ...state,
        cartIsOpen: action.payload,
      };
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error(`Unhandled error type ${action.type} in userReducer`);
  }
};

const INITIAL_STATE = {
  cartIsOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal, cartIsOpen } = state;

  const updateCartItems = (newCartItems) => {
    // generate new cart count
    const newCartCount = newCartItems.reduce(
      (totalQuantity, newCartItem) => totalQuantity + newCartItem.quantity,
      0
    );

    // generate new cart total
    const newCartTotal = newCartItems.reduce(
      (totalQuantity, newCartItem) =>
        totalQuantity + newCartItem.quantity * newCartItem.price,
      0
    );

    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItems(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItems(newCartItems);
  };

  const setCartIsOpen = (bool) => {
    dispatch({ type: "SET_CART_OPEN", payload: bool })
  }

  const value = {
    cartIsOpen,
    setCartIsOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
