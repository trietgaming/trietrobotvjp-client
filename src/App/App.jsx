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
import { useSnackbar } from "notistack";
import getErrorTranslated from "@appFirebase/errorCodeTranslator";

function App() {
  console.log("rerender App");
  const updateUser = useUpdateUser();
  const auth = useAuth();
  const isLightMode = useSelector((state) => state.isLightMode);
  const { enqueueSnackbar } = useSnackbar();

  useLayoutEffect(() => {
    (async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
        localStorage.setItem("userLoggedIn", `${Boolean(user)}`);
        updateUser(user);

        if (user && user.emailVerified && !user.account) {
          console.log("request to server;");
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/users/account`,
            {
              id_token: await getIdToken(user, true),
            }
          );

          user.account = {
            isBalancePublic: response.data.is_balance_public,
            isInventoryPublic: response.data.is_inventory_public,
            isTradeable: response.data.is_tradable,
            bannerId: response.data.banner_id,
            wallet: response.data.wallet,
            bank: response.data.bank,
            bankLimit: response.data.bank_limit,
            level: response.data.level,
            hasPinCode: response.data.has_pin_code,
          };
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
        enqueueSnackbar(getErrorTranslated(error), {
          variant: "error",
          persist: true,
        });
      if (ok) enqueueSnackbar("Thành công!", { variant: "success" });
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
