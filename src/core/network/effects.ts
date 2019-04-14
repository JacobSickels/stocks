import { filter, mergeMap, flatMap, catchError } from "rxjs/operators";
import { combineEpics, Epic } from "redux-observable";
import { api } from "../api/api";
import { from } from "rxjs";
import { setNetworkResponse, networkGet } from "./actions";
import { Action } from "redux";
import { RootState } from "../RootReducer";
import { isActionOf } from "typesafe-actions";

export const getEffect: Epic<Action, Action, RootState, any> = action$ =>
  action$.pipe(
    filter(isActionOf(networkGet)),
    mergeMap(({ payload: { path, params, successAction } }) =>
      from(api.get(path, params)).pipe(
        flatMap(response => [
          setNetworkResponse(response.data),
          ...(successAction ? [successAction(response.data)] : [])
        ]),
        catchError(error => {
          console.log("error", error);
          return [];
        })
      )
    )
  );

export default combineEpics(getEffect);
