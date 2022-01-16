import { useState, useCallback } from "react";
import { useFormikContext } from "formik";
import ReCaptcha from "../../../../global-components/AppReCaptcha";
import { Link as ReactRouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";

const LowerComponent = () => {
  const {
    submitForm,
    isSubmitting: loading,
    isValid,
    dirty,
  } = useFormikContext();
  const [isHuman, setHuman] = useState(false);
  const [isSent, setSent] = useState(false);

  console.log("isHuman", isHuman);

  const handleSubmit = async () => {
    try {
      await submitForm();
      setSent(true);
    } catch (err) {
      setSent(false);
    }
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
        disabled={!isHuman || loading || isSent || !isValid || !dirty}
        onClick={
          isHuman && !loading && !isSent && dirty && isValid
            ? handleSubmit
            : undefined
        }
      >
        {loading && <CircularProgress size={20} sx={{ mr: 1 }} />}
        {isSent ? "Kiểm tra email của bạn" : "Gửi yêu cầu"}
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
