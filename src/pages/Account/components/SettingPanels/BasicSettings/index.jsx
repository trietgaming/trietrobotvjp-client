import { useCallback, useRef } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import BasicSettingsComponent from "./BasicSettingsComponent";
import useUser from "@appHooks/useUser";
import useUpdateUserData from "@appHooks/useUpdateUserData";
import { useSnackbar } from "notistack";

const BasicSettings = () => {
  const { enqueueSnackbar } = useSnackbar();
  const currentUser = useUser("displayName");
  const updateUserData = useUpdateUserData();
  const fileInputRef = useRef();

  const FileInputField = useCallback(
    ({ onChange }) => (
      <input
        type="file"
        id="avatar-upload"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={onChange}
      />
    ),
    []
  );

  const handleResetForm = (resetForm, showSnackbar = true) => {
    resetForm();
    fileInputRef.current.value = "";
    showSnackbar && enqueueSnackbar("Đã hủy thay đổi", { variant: "info" });
  };

  const formik = {
    validationSchema: yup.object({
      username: yup
        .string()
        .trim()
        .min(6, "Tên người dùng phải dài tối thiểu 6 kí tự ")
        .max(20, "Tên người dùng chỉ có thể dài tối đa 20 kí tự ")
        .required(
          "Không được bỏ trống. Nếu không muốn chỉnh sửa, bạn có thể ấn Hủy."
        ),
      selectedFile: yup.string().nullable(),
    }),
    initialValues: {
      username: currentUser.displayName,
      selectedFile: null,
    },
    onSubmit: async (values, { resetForm }) => {
      console.log("submit");
      try {
        await updateUserData(values);
        handleResetForm(resetForm, false);
        enqueueSnackbar("Thay đổi thành công!", { variant: "success" });
      } catch (err) {
        enqueueSnackbar(`Thay đổi thất bại: ${err}`, {
          variant: "error",
          persist: true,
        });
      }
    },
    enableReinitialize: true,
  };

  console.log(currentUser);
  return (
    <Formik {...formik}>
      <BasicSettingsComponent
        {...{
          handleResetForm,
          FileInputField,
        }}
      />
    </Formik>
  );
};

export default BasicSettings;
