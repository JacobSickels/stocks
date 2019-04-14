import { filter, switchMap } from "rxjs/operators";
import { combineEpics, Epic } from "redux-observable";
import { signIn, signOut } from "./actions";
import { firebase, googleAuthProvider } from "../../firebase";
import { RootState } from "../RootReducer";
import { Action } from "redux";
import { isActionOf } from "typesafe-actions";

export const loginEffect: Epic<Action, Action, RootState, any> = action$ =>
  action$.pipe(
    filter(isActionOf(signIn)),
    switchMap(() => {
      firebase.auth().signInWithPopup(googleAuthProvider);
      return [];
    })
  );

export const logoutEffect: Epic<Action, Action, RootState, any> = action$ =>
  action$.pipe(
    filter(isActionOf(signOut)),
    switchMap(() => {
      firebase.auth().signOut();
      return [];
    })
  );

export default combineEpics(loginEffect, logoutEffect);
