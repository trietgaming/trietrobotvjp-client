/* eslint-disable */

declare module "@mui/material" {
  import { ButtonProps, Palette } from "@mui/material";
  interface ExtendedColor {
    color: keyof Palette;
    to: string;
  }

  export type ExtendedButtonProps = ExtendedColor &
    Omit<ButtonProps, keyof ExtendedColor>;
}
