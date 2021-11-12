export const lightThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0541f5',
    },
    secondary: {
      main: '#212529',
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#000000',
    },
    error: {
      main: '#fb0f0f',
    },
    success: {
      main: '#009432',
    },
    info: {
      main: "#007bff",
    },
    divider: 'rgba(0,0,0,0.17)',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: '#ffffff',
          color: '#000000',
        },
      },
      defaultProps: {
        color: "inherit",
      },
    },
  },
};