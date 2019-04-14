import { BehaviorSubject } from "rxjs";
import { combineEpics, Epic } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import networkEffects from "./network/effects";
import authEffects from "./auth/effects";
import apiEffects from "./api/effects";
import collectionEffects from "./collection/effects";
import { Action } from "redux";
import { RootState } from "./RootReducer";

const effect$ = new BehaviorSubject(
  combineEpics(networkEffects, authEffects, apiEffects, collectionEffects)
);

export const rootEffect: Epic<Action, Action, any, any> = (
  action$,
  state$,
  services
) => effect$.pipe(mergeMap(effect => effect(action$, state$, services)));

export const registerLazyEffect = (effect: Epic) => effect$.next(effect);

export default rootEffect;
