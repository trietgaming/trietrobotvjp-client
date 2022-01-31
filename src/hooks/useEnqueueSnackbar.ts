import { useSnackbar, VariantType } from "notistack";
import getErrorCodeTranslated from "src/errorCodeTranslator";
import { useCallback } from "react";

const useEnqueueSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useCallback(
    ({
      message = "Đã có lỗi xảy ra:",
      variant = "error",
      errCode,
      persist = false,
    }: {
      message?: string;
      variant?: VariantType;
      errCode?: string;
      persist?: boolean;
    }) =>
      enqueueSnackbar(
        message + (errCode ? " " + getErrorCodeTranslated(errCode) : ""),
        { variant, persist }
      ),
    []
  );
};

export default useEnqueueSnackbar;
