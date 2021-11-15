import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProfile } from "firebase/auth";
import getErrorTranslated from "../errorCodeTranslator";
import store from "@appReduxStore";
import { changeAuthStatus } from "@appFirebase/auth";

export const updateUserProfile = createAsyncThunk(
  "firestore/updateUserProfile",
  async ({ username }, { rejectWithValue }) => {
    try {
      await updateProfile(getCurrentUser(), { displayName: username?.trim() });
      store.dispatch(changeAuthStatus(getCurrentUser()));
    } catch (error) {
      return rejectWithValue(getErrorTranslated(error.code));
    }
  }
);
