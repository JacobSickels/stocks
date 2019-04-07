import { combineReducers } from "redux";
import network from "./network/reducer";
import auth from "./auth/reducer";

export const rootReducers = {
  network,
  auth
};

const rootReducer = combineReducers(rootReducers);

export default rootReducer;
