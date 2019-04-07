import { AuthAction } from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case AuthAction.LOGIN:
      const { uid, displayName, photoURL, email } = action.payload;
      return { ...state, uid, displayName, photoURL, email };

    case AuthAction.LOGOUT:
      return {};
    default:
      return state;
  }
};
