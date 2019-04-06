import rootReducer from "./RootReducer";
import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEffect from "./RootEffect";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const effectMiddleware = createEpicMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(effectMiddleware))
);

effectMiddleware.run(rootEffect);

export default store;
