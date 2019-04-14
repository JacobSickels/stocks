import { createAction, ActionType } from "typesafe-actions";

export const login = createAction(
  "[AUTH] login",
  resolve => (user: firebase.User) => resolve(user)
);

export const signIn = createAction("[AUTH] sign in");

export const signOut = createAction("[AUTH] sign out");

export const logout = createAction("[AUTH] logout");

const authAction = {
  login,
  signIn,
  signOut,
  logout
};

export type AuthAction = ActionType<typeof authAction>;
