import { createSlice } from "@reduxjs/toolkit";

const setThemeModeInLocalStorage = (value) => {
  localStorage.setItem("themeLightMode", value);
  return value;
}

const initialState = localStorage.getItem("themeLightMode") === "true"
  ? true
  : localStorage.getItem("themeLightMode") === 'false'
    ? false
    : setThemeModeInLocalStorage(true);

const themeLightMode = createSlice({
  name: "themeLightMode",
  initialState: initialState,
  reducers: {
    changeThemeMode: (state) => {
      const newState = setThemeModeInLocalStorage(!state); //return current lightThemeMode (true or false)
      return newState;
    },
  },
});

const { reducer, actions } = themeLightMode;
export const { changeThemeMode } = actions;
export default reducer;
