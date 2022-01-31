import { ThemeOptions } from "@mui/material";

export default {
  //Dark theme
  palette: {
    mode: "dark",
    primary: {
      main: "#00acff",
    },
    secondary: {
      main: "#1C6DD0",
    },
    success: {
      main: "#3df991",
    },
    background: {
      default: "#18191a",
      paper: "#191a1c",
    },
    dark: {
      main: "#212529",
    },
    info: {
      main: "#57dbff",
    },
    error: {
      main: "#ff0a33",
    },
    contrast: {
      main: "#ffffff",
    },
    input: {
      main: "#1e1f21",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          color: "#fff",
        },
        root: {
          boxShadow: "none",
        },
      },
      defaultProps: {
        color: "inherit",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01))",
        },
      },
    },
  },
} as ThemeOptions;
