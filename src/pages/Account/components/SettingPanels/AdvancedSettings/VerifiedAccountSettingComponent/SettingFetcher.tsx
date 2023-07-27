import { memo, useEffect } from "react";
import useUpdateUserAccount from "@appHooks/useUpdateUserAccount";
import useUser from "@appHooks/useUser";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import useUserAccount from "@appHooks/useUserAccount";

const SettingFetcher = memo(() => {
  const updateUserAccount = useUpdateUserAccount();
  const account = useUserAccount(
    "isTradable",
    "isInventoryPublic",
    "isBalancePublic"
  );
  const { uid } = useUser("uid");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/users/${uid}/account?fields=isTradable&fields=isBalancePublic&fields=isInventoryPublic`
        );
        if (!response.data || !response.data.ok) throw "unexpected";

        updateUserAccount(response.data.data);
      } catch (err: any) {
        console.log(err);
        console.log(JSON.stringify(err?.response, null, 2));
      }
    })();
  }, []);

  return account!.isTradable === undefined ? (
    //Because all setting are returned all once, so it's synced.
    //One of them is undefined so all of them are undefined
    <CircularProgress sx={{ display: "flex", mx: "auto" }} />
  ) : null;
});

export default SettingFetcher;
