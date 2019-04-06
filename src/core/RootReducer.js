import { combineReducers } from "redux";
import network from "./network/reducer";

export const rootReducers = {
  network
};

const rootReducer = combineReducers(rootReducers);

export default rootReducer;
