import { BehaviorSubject } from "rxjs";
import { combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import networkEffects from "./network/effects";
import authEffects from "./auth/effects";
import apiEffects from "./api/effects";

const effect$ = new BehaviorSubject(
  combineEpics(networkEffects, authEffects, apiEffects)
);

export const rootEffect = (action$, state$, services) =>
  effect$.pipe(mergeMap(effect => effect(action$, state$, services)));

export const registerLazyEffect = effect => effect$.next(effect);

export default rootEffect;
