import { filter, mergeMap, flatMap, catchError } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import { api } from "../api/api";
import { from } from "rxjs";
import { NetworkAction, setNetworkResponse } from "./actions";

export const getEffect = action$ =>
  action$.pipe(
    filter(action => action.type === NetworkAction.GET),
    mergeMap(({ payload: { path, successAction } }) => {
      console.log(successAction);
      return from(api.get(path)).pipe(
        flatMap(response => [
          setNetworkResponse(response.data),
          ...(successAction ? [successAction(response.data)] : [])
        ]),
        catchError(error => console.log(error))
      );
    })
  );

export default combineEpics(getEffect);
