import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import PRODUCTS from "../shop-data.json"

// Context storage
export const ProductContext = createContext({
  products: [],
});

// Context provider - the actual wrapping component
export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = {
    products,
  };

  return <ProductContext.Provider value={value}> {children} </ProductContext.Provider>;
};
