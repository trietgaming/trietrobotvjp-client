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
import axios, { AxiosError } from "axios";
import { RootStateType } from "@appStore";
import useUpdateUserAccount from "@appHooks/useUpdateUserAccount";

const App = () => {
  console.log("rerender App");
  const updateUser = useUpdateUser();
  const auth = useAuth();
  const isLightMode = useSelector((state: RootStateType) => state.isLightMode);
  const enqueueSnackbar = useEnqueueSnackbar();
  const updateUserAccount = useUpdateUserAccount();

  useLayoutEffect(() => {
    (async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
        updateUser(user);

        if (user && user.emailVerified) {
          console.log("request to server;");
          try {
            const response = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/users/${
                user.uid
              }/account?fields=level&fields=wallet&fields=bank&fields=bankLimit`
            );
            updateUserAccount(response.data.data);
          } catch (err: unknown) {
            console.log(JSON.stringify((err as AxiosError).response, null, 2));
          }
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
        window.history.replaceState(null, "", window.location.pathname);

      if (error)
        enqueueSnackbar({
          errCode: error,
          persist: true,
        });
      if (ok) enqueueSnackbar({ message: "Thành công!", variant: "success" });

      axios.interceptors.request.use(
        async (config) => {
          if (!config.headers) return;

          config.headers.authorization = auth.currentUser
            ? await getIdToken(auth.currentUser, true)
            : "";
          config.headers["content-type"] = "application/json";
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
};

export default App;
