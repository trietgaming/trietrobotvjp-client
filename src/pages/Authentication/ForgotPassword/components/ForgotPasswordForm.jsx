import { sendPasswordResetEmail } from "@firebase/auth";
import useAuth from "@appHooks/useAuth";
import { useSnackbar } from "notistack";
import getErrorTranslated from "src/errorCodeTranslator";
import * as yup from "yup";
import { Formik } from "formik";
import FormComponent from "./FormComponent";
import AboveComponent from "./AboveComponent";
import LowerComponent from "./LowerComponent";

const ForgotPassword = () => {
  const auth = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const formik = {
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Vui lòng nhập email hợp lệ")
        .required("Bạn chưa nhập email"),
    }),
    initialValues: {
      email: "",
    },
    initialStatus: {
      isSent: false,
    },
    onSubmit: async ({ email }) => {
      try {
        await sendPasswordResetEmail(auth, email);
        enqueueSnackbar(
          `Đã gửi thư đặt lại mật khẩu đến ${email}. Vui lòng kiểm tra cả mục thư rác nếu không tìm thấy`,
          { variant: "info", persist: true }
        );
      } catch (err) {
        enqueueSnackbar(getErrorTranslated(err.code), {
          variant: "error",
          persist: true,
        });
        throw err;
      }
    },
  };
  return (
    <Formik {...formik}>
      <>
        <AboveComponent />
        <FormComponent />
        <LowerComponent />
      </>
    </Formik>
  );
};

export default ForgotPassword;
