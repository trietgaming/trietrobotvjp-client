export default {
  //Light theme
  palette: {
    mode: "light",
    primary: {
      main: "#0541f5",
    },
    secondary: {
      main: "#005691",
    },
    background: {
      default: "rgb(247, 249, 252)",
    },
    text: {
      primary: "#000000",
    },
    error: {
      main: "#fb0f0f",
    },
    success: {
      main: "#007944",
    },
    info: {
      main: "#007bff",
    },
    contrast: {
      main: "#050505",
    },
    divider: "rgba(0,0,0,0.17)",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: "#fff",
          color: "#000000",
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
          boxShadow: "0px 0px 14px 0px rgba(0,0,0,0.25)",
          borderRadius: "12px",
        },
      },
    },
  },
};
