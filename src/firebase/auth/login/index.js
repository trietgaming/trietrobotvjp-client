import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import getErrorTranslated from "../../errorCodeTranslator";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return rejectWithValue(getErrorTranslated(error.code));
    }
  }
);
