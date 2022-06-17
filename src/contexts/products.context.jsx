import { useEffect } from "react";
import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.js"
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// Context storage
export const ProductContext = createContext({
  products: [],
});

// Context provider - the actual wrapping component
export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA)
  // }, [])

  const value = {
    products,
  };

  return <ProductContext.Provider value={value}> {children} </ProductContext.Provider>;
};
