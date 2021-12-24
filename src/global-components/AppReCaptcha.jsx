import { memo } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const AppReCaptcha = memo(({ handleCaptchaChange, handleCaptchaExpired }) => {
  return (
    <ReCAPTCHA
      size="normal"
      theme={localStorage.getItem("isLightMode") === "false" ? "dark" : "light"}
      sitekey={`${import.meta.env.VITE_CAPTCHA_KEY}`}
      onChange={handleCaptchaChange}
      onExpired={handleCaptchaExpired}
    />
  );
});

export default AppReCaptcha;
