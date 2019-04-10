import { filter, switchMap } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import { AuthAction } from "./actions";
import {
  firebase,
  googleAuthProvider,
  githubAuthProvider
} from "../../firebase";

export const loginEffect = action$ =>
  action$.pipe(
    filter(action => action.type === AuthAction.SIGNIN),
    switchMap(() => {
      firebase.auth().signInWithPopup(googleAuthProvider);
      return [];
    })
  );

export const logoutEffect = action$ =>
  action$.pipe(
    filter(action => action.type === AuthAction.SIGNOUT),
    switchMap(() => {
      firebase.auth().signOut();
      return [];
    })
  );

export default combineEpics(loginEffect, logoutEffect);
