import AppRouter from "./AppRouter";
import lightTheme from "@assets/styles/lightTheme";
import darkTheme from "@assets/styles/darkTheme";
import { useMemo, useLayoutEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import useUpdateUser from "@appHooks/useUpdateUser";
import useAuth from "@appHooks/useAuth";
import { getIdToken } from "@firebase/auth";
import useEnqueueSnackbar from "@appHooks/useEnqueueSnackbar";
import baseStyle from "@assets/styles/baseStyle";
import axios from "axios";

function App() {
  console.log("rerender App");
  const updateUser = useUpdateUser();
  const auth = useAuth();
  const isLightMode = useSelector((state) => state.isLightMode);
  const enqueueSnackbar = useEnqueueSnackbar();

  useLayoutEffect(() => {
    (async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
        localStorage.setItem("userLoggedIn", `${Boolean(user)}`);
        updateUser(user);

        if (user && user.emailVerified && !user.account) {
          console.log("request to server;");
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/users/${user.uid}/account`,
            null
          );
          user.account = response.data;
          updateUser(user);
        }
      });

      if (
        !localStorage.getItem(
          `firebase:authUser:${import.meta.env.VITE_FIREBASE_API_KEY}:[DEFAULT]`
        )
      )
        updateUser(null);

      const search = new URLSearchParams(window.location.search);
      const error = search.get("error");
      const ok = search.get("ok");

      (error || ok) &&
        window.history.replaceState(null, null, window.location.pathname);

      if (error)
        enqueueSnackbar({
          errCode: error,
          persist: true,
        });
      if (ok) enqueueSnackbar({ message: "Thành công!", variant: "success" });

      axios.interceptors.request.use(
        async (config) => {
          config.headers.authorization = auth.currentUser
            ? await getIdToken(auth.currentUser, true)
            : undefined;

          return config;
        },
        (error) => {
          enqueueSnackbar({
            errCode: error?.response?.data?.code,
            persist: true,
          });
        }
      );
    })();
  }, []);

  const theme = useMemo(
    () => createTheme(isLightMode ? lightTheme : darkTheme, baseStyle),
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
