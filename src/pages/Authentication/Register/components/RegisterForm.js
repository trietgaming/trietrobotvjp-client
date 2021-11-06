import { Formik } from "formik";
import * as yup from "yup";
import RegisterFormComponent from "./RegisterFormComponent";
import { register } from "../../../../firebase/auth/register";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const dispatch = useDispatch();

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
      loading: false,
      error: "",
    },
    onSubmit: ({ username, email, password }, { setStatus }) => {
      setStatus({ loading: true });
      dispatch(register({ username, email, password }))
        .unwrap()
        .catch((message) => setStatus({ loading: false, error: message }));
    },
  };

  return <Formik {...formik} component={RegisterFormComponent} />;
};

export default RegisterForm;
