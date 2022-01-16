import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useVerifyEmail from "@appHooks/useVerifyEmail";
import { useState } from "react";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import SettingIcon from "@mui/icons-material/Settings";

const UnVerifiedAccountSetting = () => {
  const { sendable, sendVerificationEmail } = useVerifyEmail();
  const [isSending, setSending] = useState(false);
  return (
    <>
      <Typography variant="h4" textAlign="center" color="primary">
        Khoan đã...
      </Typography>

      <Typography sx={{ margin: 6 }}>
        Email của bạn chưa được xác thực. Để sử dụng nhiều tính năng hơn, vui
        lòng xác thực email của bạn.
      </Typography>
      <Button
        size="large"
        variant="contained"
        sx={{ display: "flex", mx: "auto" }}
        disabled={!sendable || isSending}
        onClick={async () => {
          setSending(true);
          try {
            await sendVerificationEmail();
          } catch {
            setSending(false);
          }
        }}
      >
        {sendable ? "Xác thực Email ngay" : "Kiểm tra hộp thư của bạn"}
      </Button>
      <Typography sx={{ margin: 6, pb: 6 }}>
        Sau khi nhấn nút xác thực, chúng tôi sẽ gửi một email có chứa một đường
        dẫn đến hộp thư của bạn. Nhấn vào liên kết đó để xác thực email của bạn.
        Nêu bạn không tìm thấy thư, hãy kiểm tra mục thư rác (spam)
      </Typography>
      <Hidden mdUp>
        <IconButton
          sx={{ position: "fixed", bottom: "1em", zIndex: 9 }}
          onClick={() =>
            document.getElementById("account-drawer-toggler")?.click()
          }
        >
          <SettingIcon />
        </IconButton>
      </Hidden>
    </>
  );
};

export default UnVerifiedAccountSetting;
