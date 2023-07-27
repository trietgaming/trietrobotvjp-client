/* eslint-disable */
import { ButtonProps, ButtonTypeMap } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  import { PaletteColor, Palette } from "@mui/material";
  interface Palette {
    contrast: PaletteColor;
  }

  interface Theme {
    pallete: {
      contrast: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    pallete?: {
      contrast?: string;
    };
  }
}

declare module "@mui/material" {
  import { ButtonProps, Palette } from "@mui/material";
  interface ExtendedColor {
    color: keyof Palette;
    to: string;
  }

  export type ExtendedButtonProps = ExtendedColor &
    Omit<ButtonProps, keyof ExtendedColor>;
}

declare module "@mui/material/Button" {
  import { ExtendedButtonProps } from "@mui/material";
  declare function Button(props: ExtendedButtonProps): React.FC;
  export default Button;
}
