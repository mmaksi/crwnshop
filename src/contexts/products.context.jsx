import { createContext, useState } from "react";
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
