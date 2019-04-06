import { BehaviorSubject } from "rxjs";
import { combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import networkEffect from "./network/effects";

const effect$ = new BehaviorSubject(combineEpics(networkEffect));

export const rootEffect = (action$, state$, services) =>
  effect$.pipe(mergeMap(effect => effect(action$, state$, services)));

export default rootEffect;
