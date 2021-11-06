import { auth, FBprovider } from "../../firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import getErrorTranslated from "../../errorCodeTranslator";

export const FBlogin = createAsyncThunk(
  "auth/FBlogin",
  async (payload, { rejectWithValue }) => {
    try {
      await signInWithPopup(auth, FBprovider);
    } catch (error) {
      return rejectWithValue(getErrorTranslated(error.code));
    }
  }
);
