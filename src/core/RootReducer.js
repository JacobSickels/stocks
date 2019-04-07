import { combineReducers } from "redux";
import auth from "./auth/reducer";
import stocks from "./api/reducer";

export const rootReducers = {
  auth,
  stocks
};

const rootReducer = combineReducers(rootReducers);

export default rootReducer;
