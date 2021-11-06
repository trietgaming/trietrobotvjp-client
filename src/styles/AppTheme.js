import { darkThemeOptions } from "./DarkTheme";
import { lightThemeOptions } from "./LightTheme";

export const getThemeMode = (lightMode) => (
  lightMode
  ? lightThemeOptions
  : darkThemeOptions
);