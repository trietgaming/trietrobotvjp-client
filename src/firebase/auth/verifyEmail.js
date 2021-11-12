import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import getErrorTranslated from "../errorCodeTranslator";

export const sendVerificationEmail = createAsyncThunk(
  "auth/sendVerificationEmail",
  async (payload, { rejectWithValue }) => {
    try {
      await sendEmailVerification(auth.currentUser);
    } catch (error) {
      return rejectWithValue(getErrorTranslated(error.code));
    }
  }
);
