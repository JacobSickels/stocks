import { combineReducers } from "redux";
import auth from "./auth/reducer";
import stocks from "./api/reducer";
import collection from "./collection/reducer";
import { reducer as form } from "redux-form";
import { StateType } from "typesafe-actions";

export const rootReducers = {
  auth,
  stocks,
  collection,
  form
};

const rootReducer = combineReducers(rootReducers);

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
