import { Formik } from "formik";
import VerifiedAccountSettingComponent from "./VerifiedAccountSettingComponent";
import * as yup from "yup";
import useUser from "@appHooks/useUser";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import useEnqueueSnackbar from "@appHooks/useEnqueueSnackbar";
import useUpdateUser from "@appHooks/useUpdateUser";

const VerifiedAccountSetting = () => {
  const currentUser = useUser();
  const { isBalancePublic, isInventoryPublic, isTradeable } =
    currentUser?.account || {};
  const enqueueSnackbar = useEnqueueSnackbar();
  const updateUser = useUpdateUser();

  return currentUser.account ? (
    <Formik
      {...{
        validationSchema: yup.object({
          isBalancePublic: yup.boolean(),
          isInventoryPublic: yup.boolean(),
          isTradeable: yup.boolean(),
        }),
        initialValues: {
          isBalancePublic,
          isInventoryPublic,
          isTradeable,
        },
        onSubmit: async (values, { resetForm }) => {
          try {
            const response = await axios.put(
              `${import.meta.env.VITE_BACKEND_URL}/users/${
                currentUser.uid
              }/account`,
              { values }
            );

            if (!response.data.ok || !response.data.account) throw "unexpected";
            currentUser.account = response.data.account;
            updateUser(currentUser);
            resetForm();
            enqueueSnackbar({
              message: "Thay đổi thành công!",
              variant: "success",
            });
          } catch (err) {
            console.log(err);
            enqueueSnackbar({ errCode: err?.response?.data?.code });
          }
        },
        enableReinitialize: true,
      }}
    >
      <VerifiedAccountSettingComponent />
    </Formik>
  ) : (
    <CircularProgress sx={{ display: "flex", mx: "auto" }} />
  );
};

export default VerifiedAccountSetting;
