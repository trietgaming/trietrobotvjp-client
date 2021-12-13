import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ConflictRegister from "./ConflictRegister";
import CenteredLoading from "@components/CenteredLoading";
import { useSnackbar } from "notistack";
import getErrorTranslated from "@appFirebase/errorCodeTranslator";
import { Redirect } from "react-router-dom";

const SocialRegister = () => {
  const [Component, setComponent] = useState(<CenteredLoading />);
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();

  useEffect(async () => {
    const search = location.search;
    const token = new URLSearchParams(search).get("token");

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/auth/discord/verify",
        {
          jwtToken: token,
        }
      );
      const payload = response.data.payload;
      payload
        ? (payload.rawToken = token)
        : (() => {
            throw new Error({
              code: "jwt/invalid",
            });
          })();
      payload.conflict
        ? setComponent((prev) => <ConflictRegister payload={payload} />)
        : setComponent((prev) => <div>vai</div>);
    } catch (err) {
      setComponent((prev) => <Redirect to="/login" />);
      enqueueSnackbar(getErrorTranslated(err.response?.data?.code), {
        variant: "error",
      });
    }
  }, []);
  return Component;
};

export default SocialRegister;
