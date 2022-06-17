import { useEffect } from "react";
import { createContext, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// Context storage
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// Context provider - the actual wrapping component
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = {
    categoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {" "}
      {children}{" "}
    </CategoriesContext.Provider>
  );
};
