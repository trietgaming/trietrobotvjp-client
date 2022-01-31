import { memo, useEffect } from "react";
import useUpdateUser from "@appHooks/useUpdateUser";
import useUser from "@appHooks/useUser";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const SettingFetcher = memo(() => {
  const updateUser = useUpdateUser();
  const user = useUser("account");

  useEffect(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/${
          user.uid
        }/account?fields=isTradable&fields=isBalancePublic&fields=isInventoryPublic`
      );
      if (!response.data || !response.data.ok) throw "unexpected";
      user.account = { ...user.account, ...response.data.data };

      updateUser(user);
    } catch (err) {
      console.log(err);
      console.log(JSON.stringify(err.response, null, 2));
    }
  }, []);

  return user.account.isTradable === undefined ? (
    //Because all setting are returned all once, so it's synced.
    //One of them is undefined so all of them are undefined
    <CircularProgress sx={{ display: "flex", mx: "auto" }} />
  ) : null;
});

export default SettingFetcher;
