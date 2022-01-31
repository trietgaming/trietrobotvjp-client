import { useState, useEffect } from "react";
import { signInWithCustomToken } from "@firebase/auth";
import { Redirect } from "react-router-dom";
import useAuth from "@appHooks/useAuth";
import CenteredLoading from "../../../../global-components/CenteredLoading";
import { useSnackbar } from "notistack";
import gerErrorTranslated from "src/errorCodeTranslator";

const CustomLogin = () => {
  const [Component, setComponent] = useState(<CenteredLoading />);
  const { enqueueSnackbar } = useSnackbar();
  const auth = useAuth();

  useEffect(async () => {
    const search = location.search;
    const token = new URLSearchParams(search).get("token");
    history.replaceState(null, null, "");
    if (token) {
      try {
        const user = await signInWithCustomToken(auth, token);
        if (!user) throw "something went wrong";
        enqueueSnackbar("Đăng nhập thành công!", { variant: "success" });
      } catch (err) {
        enqueueSnackbar(gerErrorTranslated(err.code), { variant: "error" });
        setComponent(() => <Redirect to="/login" />);
        console.log(err);
      }
    } else {
      setComponent(() => <Redirect to="/login" />);
    }
  }, []);

  return Component;
};

export default CustomLogin;
