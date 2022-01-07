import AppRouter from "./AppRouter";
import lightTheme from "@assets/styles/lightTheme";
import darkTheme from "@assets/styles/darkTheme";
import { useMemo, useLayoutEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import useUpdateUser from "@customHooks/useUpdateUser";
import useAuth from "@customHooks/useAuth";
import { getIdToken } from "@firebase/auth";
import axios from "axios";
import useEnqueueSnackbar from "@customHooks/useEnqueueSnackbar";

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
            null,
            { headers: { authorization: await getIdToken(user, true) } }
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
          // Do something before request is sent
          config.headers.authorization = await getIdToken(
            auth.currentUser,
            true
          );

          return config;
        },
        function (error) {
          // Do something with request error

          enqueueSnackbar({
            errCode: error?.response?.data?.code,
            persist: true,
          });
        }
      );
    })();
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
