import { BehaviorSubject } from "rxjs";
import { combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import networkEffects from "./network/effects";
import authEffects from "./auth/effects";

const effect$ = new BehaviorSubject(combineEpics(networkEffects, authEffects));

export const rootEffect = (action$, state$, services) =>
  effect$.pipe(mergeMap(effect => effect(action$, state$, services)));

export default rootEffect;
