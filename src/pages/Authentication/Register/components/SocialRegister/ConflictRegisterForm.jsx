import { Formik } from "formik";
import * as yup from "yup";
import ConflictRegisterFormComponent from "./ConflictRegisterFormComponent";
import { useEffect } from "react";
import axios from "axios";
import { signInWithCustomToken } from "@firebase/auth";
import useAuth from "@customHooks/useAuth";
import { useSnackbar } from "notistack";
import getErrorTranslated from "@appFirebase/errorCodeTranslator";

const ConflictRegisterForm = ({ payload }) => {
  const auth = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.code !== "Enter") return;
      document.getElementById("submit-btn").click();
    };
    window.addEventListener("keypress", handleEnter);
    return () => window.removeEventListener("keypress", handleEnter);
  }, []);

  const formik = {
    validationSchema: yup.object({
      password: yup
        .string()
        .required("Bạn chưa nhập mật khẩu")
        .min(6, "Mật khẩu phải dài tối thiểu 6 kí tự ")
        .max(18, "Mật khẩu chỉ có thể dài tối đa 18 kí tự "),
    }),
    initialValues: {
      password: "",
    },
    initialStatus: {
      error: "",
    },
    async onSubmit({ password }, { setStatus }) {
      console.log(password);
      const expiredIn = payload.exp;
      if (expiredIn - new Date().getMilliseconds() <= 0)
        return enqueueSnackbar(getErrorTranslated("jwt/invalid"), {
          variant: "error",
        });
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/auth/discord/verify`,
          {
            jwtToken: payload.rawToken,
            password,
          }
        );
        const customToken = response.data.token;
        if (!customToken) throw new Error("Something went wrong");
        try {
          await signInWithCustomToken(auth, customToken);
        } catch (err) {
          enqueueSnackbar(getErrorTranslated(err.code), { variant: "error" });
        }
      } catch (err) {
        enqueueSnackbar(getErrorTranslated(err.response.data.code), {
          variant: "error",
        });
        console.log(err.response);
      }
    },
  };
  return (
    <Formik {...formik}>
      <ConflictRegisterFormComponent payload={payload} />
    </Formik>
  );
};

export default ConflictRegisterForm;
