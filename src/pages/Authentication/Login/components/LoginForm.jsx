import { Formik } from "formik";
import * as yup from "yup";
import LoginFormComponent from "./LoginFormComponent";
import { signInWithEmailAndPassword } from "@firebase/auth";
import useAuth from "@customHooks/useAuth";
import getErrorTranslated from "@appFirebase/errorCodeTranslator";

const LoginForm = () => {
  const auth = useAuth();
  const formik = {
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Hãy nhập vào một email hợp lệ!")
        .required("Bạn chưa nhập email"),
      password: yup
        .string()
        .min(6, "Mật khẩu phải dài tối thiểu 6 kí tự ")
        .required("Bạn chưa nhập mật khẩu"),
    }),
    initialValues: {
      email: "",
      password: "",
    },
    initialStatus: {
      error: "",
    },
    onSubmit: async ({ email, password }, { setStatus }) => {
      setStatus({ error: "" });
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        return setStatus({ error: getErrorTranslated(error.code) });
      }
    },
  };

  return <Formik {...formik} component={LoginFormComponent} />;
};

export default LoginForm;
