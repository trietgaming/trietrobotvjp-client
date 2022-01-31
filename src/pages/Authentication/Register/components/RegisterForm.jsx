import { Formik } from "formik";
import * as yup from "yup";
import RegisterFormComponent from "./RegisterFormComponent";
import getErrorTranslated from "src/errorCodeTranslator";
import axios from "axios";
import { signInWithCustomToken } from "@firebase/auth";
import useAuth from "@appHooks/useAuth";
import useEnter from "@appHooks/useEnter";

const RegisterForm = () => {
  const auth = useAuth();
  useEnter("register-submit");

  const formik = {
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Hãy nhập vào một email hợp lệ!")
        .required("Bạn chưa nhập email"),
      password: yup
        .string()
        .required("Bạn chưa nhập mật khẩu")
        .min(6, "Mật khẩu phải dài tối thiểu 6 kí tự ")
        .max(18, "Mật khẩu chỉ có thể dài tối đa 18 kí tự "),
      username: yup
        .string()
        .trim()
        .required("Bạn chưa nhập tên người dùng")
        .min(6, "Tên người dùng phải dài tối thiểu 6 kí tự ")
        .max(20, "Tên người dùng chỉ có thể dài tối đa 20 kí tự "),
      passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Mật khẩu không khớp!")
        .required("Bạn chưa nhập lại mật khẩu"),
    }),
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    initialStatus: {
      error: "",
    },
    onSubmit: async ({ username, email, password }, { setStatus }) => {
      setStatus({ error: "" });
      try {
        const response = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/auth/register",
          {
            email: email,
            password: password,
            displayName: username,
          }
        );
        console.log(response);
        if (response && response.data.ok && response.data.token) {
          await signInWithCustomToken(auth, response.data.token);
        }
      } catch (error) {
        console.log(JSON.stringify(error));
        setStatus({
          error: getErrorTranslated(error.response?.data.code),
        });
      }
    },
  };

  return <Formik {...formik} component={RegisterFormComponent} />;
};

export default RegisterForm;
