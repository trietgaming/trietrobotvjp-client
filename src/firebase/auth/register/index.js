import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import getErrorTranslated from "../../errorCodeTranslator";
import store from '../../../App/store';
import { setCurrentUser } from "..";

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      store.dispatch(setCurrentUser(auth.currentUser));
    } catch (error) {
      return rejectWithValue(getErrorTranslated(error.code));
    }
  }
);
