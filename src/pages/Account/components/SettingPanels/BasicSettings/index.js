import { useState, useCallback } from "react";
import { sendVerificationEmail } from "../../../../../firebase/auth/verifyEmail";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import BasicSettingsComponent from "./BasicSettingsComponent";

const BasicSettings = () => {
  const [verificationEmailSendingStatus, setVerificationEmailSendStatus] =
    useState({ isSent: false, loading: false, error: "" });

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const formik = {
    validationSchema: yup.object({
      username: yup
        .string()
        .min(6, "Tên người dùng phải dài tối thiểu 6 kí tự ")
        .max(20, "Tên người dùng chỉ có thể dài tối đa 20 kí tự "),
    }),
    initialValues: {
      username: currentUser.displayName,
    },
    initialStatus: {
      loading: false,
      error: "",
    },
    onSubmit: (values, { setStatus }) => {
      setStatus({ loading: true });
      console.log("submit");
    },
  };

  const handleSendVerificationEmail = useCallback(() => {
    setVerificationEmailSendStatus((prevStatus) => ({
      ...prevStatus,
      loading: true,
    }));

    dispatch(sendVerificationEmail())
      .unwrap()
      .then(() =>
        setVerificationEmailSendStatus((prevStatus) => ({
          isSent: true,
          loading: false,
          error: "",
        }))
      )
      .catch((error) =>
        setVerificationEmailSendStatus((prevStatus) => ({
          ...prevStatus,
          error: error,
          loading: false,
        }))
      );
      // eslint-disable-next-line
  }, []);

  const hideEmail = (email) => {
    const splitedEmail = email.split("@");
    const [emailName, emailProvider] = splitedEmail;
    return `${"•".repeat(emailName.length)}@${emailProvider}`;
  };

  console.log(currentUser);
  return (
    <Formik
      {...formik}
      component={(props) => (
        <BasicSettingsComponent
          {...{
            currentUser,
            hideEmail,
            handleSendVerificationEmail,
            verificationEmailSendingStatus,
          }}
          {...props}
        />
      )}
    />
  );
};

export default BasicSettings;