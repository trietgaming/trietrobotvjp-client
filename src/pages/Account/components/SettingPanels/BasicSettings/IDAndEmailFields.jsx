import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useUser from "@appHooks/useUser";
import { memo, useState, useMemo } from "react";
import useVerifyEmail from "@appHooks/useVerifyEmail";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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
    <Box>
      <TextField
        disabled
        variant="outlined"
        label="ID"
        defaultValue={uid}
        sx={{ width: "100%", mb: 6 }}
        component={Paper}
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
        component={Paper}
      />
    </Box>
  );
});

export default IDAndEmailFields;
