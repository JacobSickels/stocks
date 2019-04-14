import rootReducer from "./RootReducer";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEffect from "./RootEffect";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const effectMiddleware = createEpicMiddleware();

export const store: Store<any> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(effectMiddleware))
);

effectMiddleware.run(rootEffect);

export default store;
