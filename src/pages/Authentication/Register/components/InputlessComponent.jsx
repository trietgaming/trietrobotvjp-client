import { memo, useState } from "react";
import HeaderIcon from "../../shared-components/HeaderIcon";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import SocialButton from "../../shared-components/SocialButton";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import { DiscordIcon } from "../../../../assets/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import ReCaptcha from "@components/AppReCaptcha";
import { useFormikContext } from "formik";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { discordColor, facebookColor } from "@assets/styles/colors";

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

const RegisterReCaptcha = ({ onFinish }) => {
  const { submitForm, isValid } = useFormikContext();

  const handleCaptchaChange = (value) => {
    if (!value || !isValid) return;
    onFinish();
    submitForm();
  };

  return <ReCaptcha {...{ handleCaptchaChange }} />;
};

const StaticLowerComponent = memo(() => {
  return (
    <>
      <Divider>
        <Chip label="Hoặc" />
      </Divider>
      <SocialButton
        bgColor={discordColor}
        Icon={DiscordIcon}
        textColor="white"
        sx={{ mt: 2 }}
        href={import.meta.env.VITE_DISCORD_OAUTH2_URL}
      >
        Đăng ký bằng Discord
      </SocialButton>
      <SocialButton
        bgColor={facebookColor}
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

const LowerComponent = memo(({ loading, submitError, isValid, dirty }) => {
  //use props and memo instead of context
  const [isModalOpen, setModalOpen] = useState(false); //because of rerendering problem
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 3 }}
        disabled={loading || !isValid || !dirty}
        onClick={!loading && isValid && dirty ? handleOpenModal : undefined}
        id="register-submit"
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
      <StaticLowerComponent />
      {isModalOpen && (
        <Modal open={true} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <RegisterReCaptcha onFinish={handleCloseModal} />
          </Box>
        </Modal>
      )}
    </>
  );
});

export { AboveComponent, LowerComponent };
