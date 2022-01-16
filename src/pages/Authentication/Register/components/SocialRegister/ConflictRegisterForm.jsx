import { Formik } from "formik";
import * as yup from "yup";
import ConflictRegisterFormComponent from "./ConflictRegisterFormComponent";
import axios from "axios";
import { signInWithCustomToken } from "@firebase/auth";
import useAuth from "@appHooks/useAuth";
import useEnqueueSnackbar from "@appHooks/useEnqueueSnackbar";
import useEnter from "@appHooks/useEnter";

const ConflictRegisterForm = ({ payload }) => {
  const auth = useAuth();
  const enqueueSnackbar = useEnqueueSnackbar();

  useEnter("submit-btn");

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
    onSubmit: async ({ password }) => {
      console.log(password);
      const expiredIn = payload.exp;
      if (expiredIn - new Date().getMilliseconds() <= 0)
        return enqueueSnackbar({ errCode: "jwt/invalid" });
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/auth/${payload.provider}/verify`,
          {
            jwtToken: payload.rawToken,
            password,
          }
        );
        const customToken = response.data.token;
        if (!customToken) throw new Error("Something went wrong");
        try {
          await signInWithCustomToken(auth, customToken);
          enqueueSnackbar({
            message: "Liên kết thành công!",
            variant: "success",
          });
        } catch (err) {
          return enqueueSnackbar({ errCode: err.code });
        }
      } catch (err) {
        enqueueSnackbar({ errCode: err.response.data.code });
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
