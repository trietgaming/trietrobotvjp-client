import AppRouter from "./AppRouter";
import lightTheme from "@assets/styles/lightTheme";
import darkTheme from "@assets/styles/darkTheme";
import { useMemo, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import useUpdateUser from "@customHooks/useUpdateUser";
import useAuth from "@customHooks/useAuth";

function App() {
  console.log("rerender App");
  const updateUser = useUpdateUser();
  const auth = useAuth();
  const isLightMode = useSelector((state) => state.isLightMode);
  console.log(useSelector((state) => state.auth.firebase));

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);   

      updateUser(user);
    });
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        ...(isLightMode ? lightTheme : darkTheme),
        breakpoints: {
          values: { xs: 0, sm: 500, md: 700, lg: 1200, xl: 1536 },
        },
      }),
    [isLightMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
