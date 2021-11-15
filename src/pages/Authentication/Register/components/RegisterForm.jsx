import { Formik } from "formik";
import * as yup from "yup";
import RegisterFormComponent from "./RegisterFormComponent";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import useAuth from "@customHooks/useAuth";
import getErrorTranslated from "@appFirebase/errorCodeTranslator";
import useUpdateUser from "@customHooks/useUpdateUser";

const RegisterForm = () => {
  const updateUser = useUpdateUser();
  const auth = useAuth();
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
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(() =>
          updateProfile(auth.currentUser, {
            displayName: username,
          }).then(() => {
            updateUser();
          })
        );
      } catch (error) {
        setStatus({ error: getErrorTranslated(error.code) });
      }
    },
  };

  return <Formik {...formik} component={RegisterFormComponent} />;
};

export default RegisterForm;
