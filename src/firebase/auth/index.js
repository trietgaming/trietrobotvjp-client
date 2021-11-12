import { createSlice } from "@reduxjs/toolkit";
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
});

export const { setCurrentUser } = auth.actions;

firebaseAuth.onAuthStateChanged((user) => {
  console.log(user);
  store.dispatch(setCurrentUser(user));
});

export default auth.reducer;
