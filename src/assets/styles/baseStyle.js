export default {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "rgba(0, 0, 0, 0.12) 0px 8px 24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1em",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiDialogActions-root": {
            margin: "0em 1em 1em",
          },
          "& .MuiDialog-paper": {
            margin: "16px",
          },
        },
      },
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 500, md: 700, lg: 1200, xl: 1536 },
  },
};
