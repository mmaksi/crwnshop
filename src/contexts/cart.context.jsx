import { useEffect } from "react";
import { createContext, useState } from "react";

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

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => false,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    );
    setCartCount(newCartCount)
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
