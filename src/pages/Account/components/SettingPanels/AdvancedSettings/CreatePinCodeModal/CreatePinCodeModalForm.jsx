import CreatePinCodeModalComponent from "./CreatePinCodeModalComponent";
import * as yup from "yup";
import { Formik } from "formik";
import useUser from "@appHooks/useUser";
import axios from "axios";
import useEnter from "@appHooks/useEnter";

const CreatePinCodeModalForm = ({ isOpen, handleToggleModal }) => {
  const basePinValidationSchema = yup
    .string()
    .length(4, "Mã PIN có độ dài bắt buộc là 4!")
    .required("Không được bỏ trống!")
    .test("numberCheck", "Vui lòng nhập đúng định dạng (0-9)!", (value) => {
      return Number.isInteger(+value);
    });
  const user = useUser();

  useEnter("pin-code-submit");

  return (
    <Formik
      {...{
        validationSchema: yup.object({
          pinCode: basePinValidationSchema,
          pinCodeConfirm: basePinValidationSchema.oneOf(
            [yup.ref("pinCode"), null],
            "Mã PIN xác nhận không khớp!"
          ),
        }),
        initialValues: {
          pinCode: "",
          pinCodeConfirm: "",
        },
        validateOnBlur: true,
        validateOnChange: false,
        async onSubmit({ pinCode }) {
          console.log("Submit");
          try {
            await axios.post(
              `${import.meta.env.VITE_BACKEND_URL}/users/${
                user.uid
              }/account/create-new-pin`,
              {
                pinCode,
              }
            );
          } catch (err) {
            console.log(err);
          }
        },
      }}
    >
      <CreatePinCodeModalComponent {...{ isOpen, handleToggleModal }} />
    </Formik>
  );
};

export default CreatePinCodeModalForm;
