import { signOut } from "firebase/auth";
import useAuth from "./useAuth";
import { useSnackbar } from "notistack";
import { useCallback } from "react";
import getErrorTranslated from "@appFirebase/errorCodeTranslator";

const useLogout = () => {
  const { enqueueSnackbar } = useSnackbar();
  const auth = useAuth();
  return useCallback(
    () =>
      signOut(auth).catch((error) => {
        console.log(error);
        enqueueSnackbar(`Lỗi đăng xuất: ${getErrorTranslated(error.code)}`, {
          variant: "error",
        });
      }),
    []
  );
};

export default useLogout;
