import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

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

  useEffect(() => {
    // stops the listener whenever component unmounts
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
      console.log("auth user has changed", user)
    })

    // runs whenever component unmounts
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};
