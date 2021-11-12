import AppRouter from "./AppRouter";
import { getThemeMode } from "../styles/AppTheme";
import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  console.log("rerender App");

  const islightMode = useSelector((state) => state.themeLightMode);

  const theme = useMemo(
    () =>
      createTheme({
        ...getThemeMode(islightMode),
        breakpoints: {
          values: { xs: 0, sm: 500, md: 700, lg: 1200, xl: 1536 },
        },
      }),
    [islightMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
