import { Formik } from "formik";
import * as yup from "yup";
import LoginFormComponent from "./LoginFormComponent";
import { login } from "../../../../firebase/auth/login";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();

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
      loading: false,
      error: "",
    },
    onSubmit: (values, { setStatus }) => {
      setStatus({ loading: true });
      dispatch(login({ ...values }))
        .unwrap()
        .catch((message) => setStatus({ loading: false, error: message }));
    },
  };

  return <Formik {...formik} component={LoginFormComponent}/>;
};

export default LoginForm;
