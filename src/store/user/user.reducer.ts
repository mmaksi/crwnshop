import { setCurrentUserAction } from './user.action';
import { AnyAction } from "redux"

export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {
  if (setCurrentUserAction.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  return state;
};
