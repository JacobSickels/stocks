import { mapTo, filter } from "rxjs/operators";
import { combineEpics } from "redux-observable";

export const networkEffect = (action$, state$) =>
  action$.pipe(
    filter(action => action.type === "PING"),
    mapTo({ type: "PONG" })
  );

export default combineEpics(networkEffect);
