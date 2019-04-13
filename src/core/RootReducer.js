import { combineReducers } from "redux";
import auth from "./auth/reducer";
import stocks from "./api/reducer";
import collection from "./collection/reducer";
import { reducer as form } from "redux-form";

export const rootReducers = {
  auth,
  stocks,
  collection,
  form
};

const rootReducer = combineReducers(rootReducers);

export default rootReducer;
