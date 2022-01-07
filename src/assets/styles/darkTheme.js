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
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: "#18191a",
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
            "linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01))",
          borderRadius: "12px",
          boxShadow: "0px 0px 14px 0px rgba(0,0,0,0.25)",
        },
      },
    },
  },
};
