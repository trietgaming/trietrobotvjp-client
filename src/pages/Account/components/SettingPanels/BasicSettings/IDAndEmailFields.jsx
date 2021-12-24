import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useUser from "@customHooks/useUser";
import { memo, useState } from "react";
import useVerifyEmail from "@customHooks/useVerifyEmail";
import { useSnackbar } from "notistack";
import getErrorTranslated from "@appFirebase/errorCodeTranslator";

const IDAndEmailFields = memo(() => {
  const { uid, email, emailVerified } = useUser();
  const [isSending, setSending] = useState(false); //isSending also like isSent
  const { enqueueSnackbar } = useSnackbar();
  const sendVerificationEmail = useVerifyEmail();

  const hiddenEmail = email.replace(
    /(?<=^[A-Za-z0-9]{2}).*?(?=@)/g,
    "••••••••"
  );

  const handleSendVerificationEmail = async () => {
    setSending(true);
    try {
      await sendVerificationEmail();
      enqueueSnackbar(
        `Đã gửi thư xác nhận đến ${hiddenEmail}. Nếu không tìm thấy, hãy kiểm tra mục thư rác.`,
        {
          variant: "info",
          persist: true,
        }
      );
    } catch (err) {
      setSending(false);
      enqueueSnackbar(`Đã có lỗi xảy ra: ${getErrorTranslated(err.code)}`, {
        variant: "error",
        persist: true,
      });
    }
  };

  console.log("rerender IDAndEmail");
  return (
    <>
      <TextField
        disabled
        variant="outlined"
        label="ID"
        defaultValue={uid}
        sx={{ width: "100%", mb: 6 }}
      />
      <TextField
        disabled
        variant="outlined"
        label="Email"
        defaultValue={hiddenEmail}
        sx={{ width: "100%" }}
        helperText={
          !emailVerified && (
            <Button
              sx={{ position: "absolute", right: 0 }}
              onClick={isSending ? undefined : handleSendVerificationEmail}
              disabled={isSending}
            >
              Xác thực email
            </Button>
          )
        }
      />
    </>
  );
});

export default IDAndEmailFields;
