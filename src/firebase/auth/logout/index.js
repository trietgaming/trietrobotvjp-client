import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut} from "firebase/auth";
import { auth } from "../../firebase";
import getErrorTranslated from "../../errorCodeTranslator";

export const logout = createAsyncThunk(
  "auth/logout",
  async (action, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      return rejectWithValue(getErrorTranslated(error.code));
    }
  }
);
