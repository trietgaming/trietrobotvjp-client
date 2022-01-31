import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState:
    localStorage["isLightMode"] === "true"
      ? true
      : localStorage["isLightMode"] === "false"
      ? false
      : true,
  reducers: {
    switchThemeMode: (state) => {
      localStorage["isLightMode"] = !state;
      return !state;
    },
  },
});

export const { switchThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
