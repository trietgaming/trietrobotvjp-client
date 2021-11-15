import { createSlice } from "@reduxjs/toolkit";
import initAppFirebase from "@appFirebase";

const auth = createSlice({
  name: "auth",
  initialState: {
    firebase: initAppFirebase(),
    isAuthenticated: false,
    isAuthEventTriggered: false,
  },
  reducers: {
    changeAuthStatus: (state, { payload: user }) => ({
      ...state,
      currentUser: user,
      isAuthenticated: Boolean(user),
      isAuthEventTriggered: true,
    }),
  },
});

export const { changeAuthStatus } = auth.actions;

export default auth.reducer;
