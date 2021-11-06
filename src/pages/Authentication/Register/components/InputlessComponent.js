import { memo } from "react";
import HeaderIcon from "../../shared-components/HeaderIcon";
import {
  Typography,
  Divider,
  Chip,
  Link,
  Alert,
  AlertTitle,
  CircularProgress,
  Button,
} from "@mui/material";
import SocialButton from "../../shared-components/SocialButton";
import { FacebookRounded, AssignmentInd } from "@mui/icons-material";
import { DiscordIcon } from "../../../../assets/icons";
import { Link as ReactRouterLink } from "react-router-dom";

const AboveComponent = memo(() => {
  return (
    <>
      <HeaderIcon Icon={AssignmentInd} />
      <Typography
        variant="h5"
        color="inherit"
        sx={{ textAlign: "center", mt: 2 }}
      >
        Đăng ký tài khoản
      </Typography>
    </>
  );
});

const LowerComponent = memo(({ loading, submitError }) => {
  return (
    <>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 3 }}
        disabled={loading}
      >
        {loading && <CircularProgress size={20} sx={{ mr: 1 }} />}
        Đăng ký
      </Button>
      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          <AlertTitle>Đăng ký thất bại</AlertTitle>
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
        sx={{ mt: 2 }}
      >
        Đăng ký bằng Discord
      </SocialButton>
      <SocialButton
        bgColor="#3360ff"
        Icon={FacebookRounded}
        textColor="white"
        sx={{ my: 2 }}
      >
        Đăng ký bằng Facebook
      </SocialButton>
      <Divider></Divider>
      <Typography variant="body1" color="inherit" sx={{ pl: 1, mt: 2, mb: -1 }}>
        Đã có tài khoản?{" "}
        {
          <Link
            underline="hover"
            to="/login"
            color="primary"
            component={ReactRouterLink}
          >
            Đăng nhập
          </Link>
        }
      </Typography>
    </>
  );
});

export { AboveComponent, LowerComponent };
