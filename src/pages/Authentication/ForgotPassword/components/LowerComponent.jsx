import { useState, useCallback, useEffect } from "react";
import { useFormikContext } from "formik";
import ReCaptcha from "@components/AppReCaptcha";
import { Link as ReactRouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";

const CountDown = ({ onFinish }) => {
  const [currentCount, setCurrentCount] = useState(30);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (currentCount <= 0) return onFinish();
      setCurrentCount((prev) => prev - 1); //onFinish must return 0
    }, 1000); // 1 seconds in miliseconds
    return () => clearInterval(timerId);
  });
  return currentCount;
};

const LowerComponent = () => {
  const {
    submitForm,
    isSubmitting: loading,
    isValid,
    dirty,
  } = useFormikContext();
  const [isHuman, setHuman] = useState(false);
  const [isCountDown, setCountDown] = useState(false);

  console.log("isHuman", isHuman);

  const handleSubmit = async () => {
    try {
      await submitForm();
      setCountDown(true);
    } catch (err) {
      setCountDown(false);
    }
  };

  const handleCountDownFinish = () => {
    setCountDown(false);
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
        disabled={!isHuman || loading || isCountDown || !isValid || !dirty}
        onClick={
          isHuman && !loading && !isCountDown && dirty && isValid
            ? handleSubmit
            : undefined
        }
      >
        {loading && <CircularProgress size={20} sx={{ mr: 1 }} />}
        {isCountDown ? (
          <>Gửi lại sau {<CountDown onFinish={handleCountDownFinish} />}</>
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
