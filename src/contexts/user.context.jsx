import React from "react";
import { createContext } from "react";
import { useState } from "react";

// Context storage
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Context provider - the actual wrapping component
export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};
