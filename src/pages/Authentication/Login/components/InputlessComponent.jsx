import SocialButton from "../../shared-components/SocialButton";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import { DiscordIcon } from "../../../../assets/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { memo } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import LoginIcon from "@mui/icons-material/Login";
import HeaderIcon from "../../shared-components/HeaderIcon";
import { useDispatch } from "react-redux";

const AboveComponent = memo(() => {
  return (
    <>
      <HeaderIcon Icon={LoginIcon} />
      <Typography
        variant="h5"
        color="inherit"
        sx={{ textAlign: "center", mt: 2 }}
      >
        Đăng nhập
      </Typography>
    </>
  );
});

const LowerComponent = memo(({ loading, submitError }) => {
  const dispatch = useDispatch();

  const handleFBLogin = () => {
    
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
          mb: 1,
        }}
      >
        <Button type="button" variant="text" color="primary">
          Quên mật khẩu?
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading && <CircularProgress size={20} sx={{ mr: 1 }} />}
          Đăng nhập
        </Button>
      </Box>
      {submitError && (
        <Alert severity="error" sx={{ my: 2 }}>
          <AlertTitle>Đăng nhập thất bại</AlertTitle>
          {submitError}
        </Alert>
      )}
      <Divider>
        <Chip label="Hoặc" />
      </Divider>
      <SocialButton
        bgColor="#5865F2"
        Icon={DiscordIcon}
        textColor="white"
        sx={{ mt: 3 }}
      >
        Đăng nhập với Discord
      </SocialButton>
      <SocialButton
        bgColor="#3360ff"
        Icon={FacebookRounded}
        textColor="white"
        sx={{ my: 2 }}
        onClick={handleFBLogin}
      >
        Đăng nhập với Facebook
      </SocialButton>
      <Divider></Divider>
      <Typography variant="body1" color="inherit" sx={{ pl: 1, mt: 2, mb: -1 }}>
        Chưa có tài khoản?{" "}
        {
          <Link
            underline="hover"
            to="/register"
            color="primary"
            component={ReactRouterLink}
          >
            Đăng ký
          </Link>
        }
      </Typography>
    </>
  );
});

export { LowerComponent, AboveComponent };
