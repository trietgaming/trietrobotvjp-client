export const darkThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#00acff",
    },
    secondary: {
      main: "#ffffff",
    },
    success: {
      main: "#3df991",
    },
    background: {
      default: "#202326",
      paper: "#212529",
    },
    dark: {
      main: "#212529",
    },
    info: {
      main: "#007bff",
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: "#212529",
          color: "#fff",
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
        },
      },
    },
  },
};
