export const AuthAction = {
  SIGNIN: "[AUTH] sign in",
  SIGNOUT: "[AUTH] sign out",
  LOGIN: "[Auth] login",
  LOGOUT: "[AUTH] logout"
};

export const login = user => ({
  type: AuthAction.LOGIN,
  payload: user
});

export const signIn = () => ({
  type: AuthAction.SIGNIN
});

export const signOut = () => ({
  type: AuthAction.SIGNOUT
});

export const logout = () => ({
  type: AuthAction.LOGOUT
});