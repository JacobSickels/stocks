import { filter, switchMap } from "rxjs/operators";
import { combineEpics, Epic } from "redux-observable";
import { signIn, signOut, login } from "./actions";
import { firebase, googleAuthProvider } from "../../firebase";
import { RootState } from "../RootReducer";
import { Action } from "redux";
import { isActionOf } from "typesafe-actions";
import { addSnackbar } from "../network/actions";

export const signInEffect: Epic<Action, Action, RootState, any> = action$ =>
  action$.pipe(
    filter(isActionOf(signIn)),
    switchMap(() => {
      firebase.auth().signInWithPopup(googleAuthProvider);
      return [];
    })
  );

export const signOutEffect: Epic<Action, Action, RootState, any> = action$ =>
  action$.pipe(
    filter(isActionOf(signOut)),
    switchMap(() => {
      firebase.auth().signOut();
      return [];
    })
  );

export const loginEffect: Epic<Action, Action, RootState, any> = action$ =>
  action$.pipe(
    filter(isActionOf(login)),
    switchMap(() => {
      return [
        addSnackbar({
          message: "Logged in successfully!",
          options: {
            variant: "success"
          }
        })
      ];
    })
  );

export default combineEpics(signInEffect, signOutEffect, loginEffect);
