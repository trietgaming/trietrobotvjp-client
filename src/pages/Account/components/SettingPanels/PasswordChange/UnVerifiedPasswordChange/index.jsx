import { Formik } from "formik";
import { useRef } from "react";

const UnVerifiedPasswordChange = () => {
  const formikConfig = useRef({

  }).current;

  return <Formik {...formikConfig}></Formik>;
};

export default UnVerifiedPasswordChange;
