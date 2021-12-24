import { useState, useEffect } from "react";
import { signInWithCustomToken } from "@firebase/auth";
import { useLocation, Redirect } from "react-router-dom";
import useAuth from "@customHooks/useAuth";
import CenteredLoading from "@components/CenteredLoading";
import { useSnackbar } from "notistack";
import gerErrorTranslated from "@appFirebase/errorCodeTranslator";

const CustomLogin = () => {
  const [Component, setComponent] = useState(<CenteredLoading />);
  const { enqueueSnackbar } = useSnackbar();
  const auth = useAuth();
  const location = useLocation();

  useEffect(async () => {
    const search = location.search;
    const token = new URLSearchParams(search).get("token");
    if (token) {
      try {
        const user = await signInWithCustomToken(auth, token);
        if (!user) throw "something went wrong";
        enqueueSnackbar("Đăng nhập thành công!", { variant: "success" });
      } catch (err) {
        enqueueSnackbar(gerErrorTranslated(err.code), { variant: "error" });
        setComponent((prev) => <Redirect to="/login" />);
        console.log(err);
      }
    } else {
      setComponent((prev) => <Redirect to="/login" />);
    }
  }, []);

  return Component;
};

export default CustomLogin;
