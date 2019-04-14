import { AuthAction, login, logout } from "./actions";
import { getType } from "typesafe-actions";

type AuthState = {
  uid?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  email?: string | null;
};

export default (state: AuthState = {}, action: AuthAction): AuthState => {
  switch (action.type) {
    case getType(login):
      const { uid, displayName, photoURL, email } = action.payload;
      return { ...state, uid, displayName, photoURL, email };

    case getType(logout):
      return {};
    default:
      return state;
  }
};
