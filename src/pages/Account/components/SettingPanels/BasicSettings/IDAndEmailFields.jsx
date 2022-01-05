import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useUser from "@customHooks/useUser";
import { memo, useState, useMemo } from "react";
import useVerifyEmail from "@customHooks/useVerifyEmail";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const IDAndEmailFields = memo(() => {
  const { uid, email, emailVerified } = useUser();
  const [isSending, setSending] = useState(false); //isSending also like isSent
  const [isShowEmail, setShowEmail] = useState(false);
  const { sendable, sendVerificationEmail } = useVerifyEmail();

  const hiddenEmail = useMemo(
    () => email?.replace(/(?<=^[A-Za-z0-9]{2}).*?(?=@)/g, "••••••••"),
    [email]
  );

  const handleSendVerificationEmail = async () => {
    setSending(true);
    try {
      await sendVerificationEmail();
    } catch {
      setSending(false);
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
        value={isShowEmail ? email : hiddenEmail}
        sx={{ width: "100%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowEmail((prev) => !prev)}>
                {isShowEmail ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={
          !emailVerified && (
            <Button
              sx={{ position: "absolute", right: 0 }}
              onClick={isSending ? undefined : handleSendVerificationEmail}
              disabled={isSending || !sendable}
            >
              {sendable ? "Xác thực email" : "Kiểm tra email của bạn"}
            </Button>
          )
        }
      />
    </>
  );
});

export default IDAndEmailFields;
