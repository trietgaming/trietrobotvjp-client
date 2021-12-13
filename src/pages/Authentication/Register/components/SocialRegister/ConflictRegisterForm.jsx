import { Formik } from "formik";
import * as yup from "yup";
import ConflictRegisterFormComponent from "./ConflictRegisterFormComponent";
import { useEffect } from "react";
import axios from "axios";
import { signInWithEmailAndPassword, getIdToken } from "@firebase/auth";
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
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          payload.email,
          password
        );
        console.log(userCredential);
        if (userCredential) {
          const idToken = await getIdToken(userCredential.user, true);
          await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/auth/discord/verify`,
            {
              jwtToken: payload.rawToken,
              idToken,
            }
          );
          enqueueSnackbar("Liên kết và đăng nhập thành công!", {
            variant: "success",
          });
        } else {
          throw new Error("error");
        }
      } catch (err) {
        enqueueSnackbar(getErrorTranslated(err.code), { variant: "error" });
        console.log(err);
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
