import { useCallback, useState } from "react";
import { sendEmailVerification } from "@firebase/auth";
import useUser from "./useUser";
import useEnqueueSnackbar from "./useEnqueueSnackbar";

const useVerifyEmail = () => {
  const currentUser = useUser("email");
  const enqueueSnackbar = useEnqueueSnackbar();
  const [sendable, setSendable] = useState(
    !localStorage.getItem("lastEmailVerify") ||
      new Date().getMilliseconds() -
        new Date(
          localStorage.getItem("lastEmailVerify") as string
        ).getMilliseconds() >=
        1000 * 60 * 60 * 24
  );

  return {
    sendable,
    sendVerificationEmail: useCallback(async () => {
      if (!sendable) {
        enqueueSnackbar({
          message:
            "Chưa thể gửi email xác thực, vui lòng kiểm tra lại email của bạn",
        });
        throw {
          code: "auth/email-not-sendable",
        };
      }
      try {
        await sendEmailVerification(currentUser);
        localStorage.setItem("lastEmailVerify", new Date().toISOString());
        enqueueSnackbar({
          message: `Đã gửi thư xác nhận đến ${currentUser.email}. Nếu không tìm thấy, hãy kiểm tra mục thư rác.`,
          variant: "info",
          persist: true,
        });
        setSendable(false);
      } catch (err: any) {
        enqueueSnackbar({
          errCode: err?.code,
          persist: true,
        });
      }
    }, []),
  };
};

export default useVerifyEmail;
