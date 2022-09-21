// Importing side effects generators
import { takeLatest, all, call, put } from "redux-saga/effects";
// Importing action creators
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// The respond generator
export function* fetchCategoriesStartAsync() {
  try {
    // call() turns a function into a side effect
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    yield put(fetchCategoriesFailure(error))
  }
}

// A generator that listens to an action and responds
export function* onFetchCategories() {
  // take() listens to actions
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesStartAsync);
}

// Accumulator that holds all generators related to categories
export function* categoriesSaga() {
  // Pause execution untill everything finishes
  yield all([call(onFetchCategories)]);
}
