import { createSlice } from "@reduxjs/toolkit";
import { extraReducers as logoutExtraReducers } from "./logout";
import { auth as firebaseAuth } from "../firebase";
import store from "../../App/store";

const auth = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    authEventTriggered: false,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = JSON.parse(JSON.stringify(action.payload));
      state.authEventTriggered = true;
      state.authenticated = Boolean(action.payload);
    }
  },
  extraReducers: {
    ...logoutExtraReducers,
  },
});

export const { setCurrentUser } = auth.actions;

firebaseAuth.onAuthStateChanged((user) => {
  store.dispatch(setCurrentUser(user));
});

export default auth.reducer;
