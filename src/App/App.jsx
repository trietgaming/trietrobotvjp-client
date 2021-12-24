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
  console.log(useSelector((state) => state.auth.firebase));

  useLayoutEffect(() => {
    (async () => {
      const error = new URLSearchParams(window.location.search).get("error");
      if (error)
        enqueueSnackbar(getErrorTranslated(error), { variant: "error" });
      const ok = new URLSearchParams(window.location.search).get("ok");
      if (ok) enqueueSnackbar("Thành công!", { variant: "success" });

      auth.onAuthStateChanged(async (user) => {
        console.log(user);
        if (user)
          getIdToken(user, true).then(async (idToken) => {
            const response = await axios.post(
              `${import.meta.env.VITE_BACKEND_URL}/users/account`,
              {
                id_token: idToken,
              }
            );

            user.account = {
              discordId: response.data.discord_id,
              facebookId: response.data.facebook_id,
              isBalancePublic: response.data.public_balance,
              isInventoryPublic: response.data.public_inventory,
              isTradeable: response.data.tradeable,
            };
            updateUser(user);
          });
        updateUser(user);
      });
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
