import { combineReducers } from "redux";
import auth from "./auth/reducer";
import stocks from "./api/reducer";
import collection from "./collection/reducer";

export const rootReducers = {
  auth,
  stocks,
  collection
};

const rootReducer = combineReducers(rootReducers);

export default rootReducer;
