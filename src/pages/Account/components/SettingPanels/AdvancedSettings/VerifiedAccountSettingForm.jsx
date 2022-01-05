import { Formik } from "formik";
import VerifiedAccountSetting from "./VerifiedAccountSetting";
import * as yup from "yup";
import useUser from "@customHooks/useUser";
import CircularProgress from "@mui/material/CircularProgress";

export default () => {
  const currentUser = useUser();
  const { isBalancePublic, isInventoryPublic, isTradeable } =
    currentUser?.account || {};
  return currentUser.account ? (
    <Formik
      {...{
        validationSchema: yup.object({
          isBalancePublic: yup.boolean(),
          isInventoryPublic: yup.boolean(),
          isTradeable: yup.boolean(),
          pinCode: currentUser.account.hasPinCode
            ? undefined
            : yup
                .string()
                .length(4, "Vui lòng nhập một mã 4 chữ số")
                .nullable()
                .test(
                  "pin",
                  "Vui lòng nhập các kí tự hợp lệ (0-9)",
                  (value) => +value || value === null
                ),
        }),
        initialValues: {
          isBalancePublic,
          isInventoryPublic,
          isTradeable,
          pinCode: currentUser.account.hasPinCode ? undefined : null,
        },
        onSubmit: async (values, { resetForm }) => {
          console.log("submit");
        },
        enableReinitialize: true,
      }}
    >
      <VerifiedAccountSetting />
    </Formik>
  ) : (
    <CircularProgress sx={{ display: "flex", mx: "auto" }} />
  );
};
