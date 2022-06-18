import React, { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Context storage
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
  
    default:
      throw new Error (`Unhandled error type ${action.type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

// Context provider - the actual wrapping component
export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const {currentUser} = state

  const setCurrentUser = (user) => {
    dispatch({type: "SET_CURRENT_USER", payload: user})
  }

  const value = {
    currentUser,
  };

  useEffect(() => {
    // stops the listener whenever component unmounts
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
    })

    // runs whenever component unmounts
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};
