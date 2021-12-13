import HeaderIcon from "../../shared-components/HeaderIcon";
import Typography from "@mui/material/Typography";
import AccessibleIcon from "@mui/icons-material/AccessibleRounded";
import { memo } from "react";

const AboveComponent = memo(() => {
  return (
    <>
      <HeaderIcon Icon={AccessibleIcon} />
      <Typography
        variant="h5"
        color="inherit"
        sx={{ textAlign: "center", my: 2 }}
      >
        Quên mật khẩu
      </Typography>
      <Typography variant="body2" color="inherit">
        Bạn quên mật khẩu? Chúng tôi sẽ gửi email đặt lại mật khẩu đến hòm thư
        của bạn sau khi ấn Gửi.
      </Typography>
    </>
  );
});

export default AboveComponent;
