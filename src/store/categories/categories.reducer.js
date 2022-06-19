/**
 * redux reducers should store data in their basic form without transforming it
 * each redux selector should care about transforming that data however it should be transformed
 */

import CATEGORY_ACTION_TYPES from "./categories.types";

export const CATEGORY_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
