import { useSnackbar } from "notistack";
import getErrorCodeTranslated from "@appFirebase/errorCodeTranslator";
import { useCallback } from "react";

export default () => {
  const { enqueueSnackbar } = useSnackbar();
  return useCallback(
    ({
      message = "Đã có lỗi xảy ra:",
      variant = "error",
      errCode,
      persist = false,
    }) =>
      enqueueSnackbar(
        message + (errCode ? " " + getErrorCodeTranslated(errCode) : ""),
        { variant, persist }
      ),
    []
  );
};
