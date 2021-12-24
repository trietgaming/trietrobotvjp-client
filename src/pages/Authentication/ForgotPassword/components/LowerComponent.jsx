import { useState, useCallback } from "react";
import { useFormikContext } from "formik";
import ReCaptcha from "@components/AppReCaptcha";
import { Link as ReactRouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import Countdown from "@components/Countdown";

const LowerComponent = () => {
  const {
    submitForm,
    isSubmitting: loading,
    isValid,
    dirty,
  } = useFormikContext();
  const [isHuman, setHuman] = useState(false);
  const [isCountdown, setCountdown] = useState(false);

  console.log("isHuman", isHuman);

  const handleSubmit = async () => {
    try {
      await submitForm();
      setCountdown(true);
    } catch (err) {
      setCountdown(false);
    }
  };

  const handleCountdownFinish = () => {
    setCountdown(false);
  };

  const handleCaptchaChange = useCallback((value) => {
    if (!value) return;
    setHuman(true);
  }, []);

  const handleCaptchaExpired = useCallback(() => {
    setHuman(false);
  }, []);

  return (
    <>
      <ReCaptcha {...{ handleCaptchaChange, handleCaptchaExpired }} />
      <Button
        variant="contained"
        sx={{ mt: 3 }}
        disabled={!isHuman || loading || isCountdown || !isValid || !dirty}
        onClick={
          isHuman && !loading && !isCountdown && dirty && isValid
            ? handleSubmit
            : undefined
        }
      >
        {loading && <CircularProgress size={20} sx={{ mr: 1 }} />}
        {isCountdown ? (
          <>
            Gửi lại sau{" "}
            {<Countdown seconds={30} onFinish={handleCountdownFinish} />}
          </>
        ) : (
          "Gửi yêu cầu"
        )}
      </Button>
      <Divider sx={{ my: 2 }} />
      Đã nhớ lại mật khẩu?{" "}
      <Link
        underline="hover"
        to="/login"
        color="primary"
        component={ReactRouterLink}
      >
        Đăng nhập
      </Link>
    </>
  );
};

export default LowerComponent;
