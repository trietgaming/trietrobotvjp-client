import { useCallback, useRef, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import BasicSettingsComponent from "./BasicSettingsComponent";
import useUser from "@customHooks/useUser";
import useFBAccountLink from "@customHooks/useFBAccountLink";
import useUpdateUserData from "@customHooks/useUpdateUserData";
import { useSnackbar } from "notistack";
import getErrorCodeTranslated from "@appFirebase/errorCodeTranslator";
import useUpdateUser from "@customHooks/useUpdateUser";
import { getIdToken } from "@firebase/auth";
import axios from "axios";

const BasicSettings = () => {
  const { enqueueSnackbar } = useSnackbar();
  const currentUser = useUser();
  const updateUser = useUpdateUser();
  const linkFBAccount = useFBAccountLink();
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

  useEffect(() => {
    getIdToken(currentUser, true).then(async (idToken) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/account`,
        {
          id_token: idToken,
        }
      );

      currentUser.account = {
        discordId: response.data.discord_id,
        facebookId: response.data.facebook_id,
        isBalancePublic: response.data.public_balance,
        isInventoryPublic: response.data.public_inventory,
        isTradeable: response.data.tradeable,
      };
      updateUser(currentUser);
    });
  }, []);

  const handleLinkFBAccount = useCallback(async () => {
    try {
      await linkFBAccount();
      enqueueSnackbar("Liên kết tài khoản Facebook thành công!", {
        variant: "success",
      });
      updateUser();
    } catch (err) {
      enqueueSnackbar(
        `Liên kết tài khoản Facebook thất bại: ${getErrorCodeTranslated(
          err.code
        )}`,
        { variant: "error", persist: true }
      );
    }
  }, []);

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
          currentUser,
          handleResetForm,
          handleLinkFBAccount,
          FileInputField,
        }}
      />
    </Formik>
  );
};

export default BasicSettings;
