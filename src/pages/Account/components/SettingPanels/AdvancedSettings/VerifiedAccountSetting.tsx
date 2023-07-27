import { Formik } from "formik";
import VerifiedAccountSettingComponent from "./VerifiedAccountSettingComponent";
import * as yup from "yup";
import useUserAccount from "@appHooks/useUserAccount";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import useEnqueueSnackbar from "@appHooks/useEnqueueSnackbar";
import useUser from "@appHooks/useUser";
import useUpdateUserAccount from "@appHooks/useUpdateUserAccount";

const VerifiedAccountSetting = () => {
  const currentUser = useUser("uid");
  const account = useUserAccount(
    "isBalancePublic",
    "isInventoryPublic",
    "isTradable"
  );
  const { isBalancePublic, isInventoryPublic, isTradable } = account || {};
  const enqueueSnackbar = useEnqueueSnackbar();
  const updateUserAccount = useUpdateUserAccount();

  return account ? (
    <Formik
      {...{
        validationSchema: yup.object({
          isBalancePublic: yup.boolean(),
          isInventoryPublic: yup.boolean(),
          isTradable: yup.boolean(),
        }),
        initialValues: {
          isBalancePublic,
          isInventoryPublic,
          isTradable,
        },
        onSubmit: async (values, { resetForm }) => {
          try {
            const response = await axios.put(
              `${import.meta.env.VITE_BACKEND_URL}/users/${
                currentUser.uid
              }/account`,
              { values }
            );

            if (!response.data.ok || !response.data.data) throw "unexpected";
            const newAccount = {
              ...account,
              ...response.data.data,
            };
            updateUserAccount(newAccount);
            resetForm();
            enqueueSnackbar({
              message: "Thay đổi thành công!",
              variant: "success",
            });
          } catch (err: any) {
            console.log(JSON.stringify(err.response, null, 2));
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
