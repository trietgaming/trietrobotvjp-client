import SocialButton from "./SocialButton";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import { facebookColor } from "@assets/styles/colors";

const FacebookLoginButton = () => {
  return (
    <SocialButton
      bgColor={facebookColor}
      Icon={FacebookRounded}
      textColor="white"
      sx={{ my: 2 }}
      href={import.meta.env.VITE_FACEBOOK_OAUTH2_URL}
    >
      Tiếp tục với Facebook
    </SocialButton>
  );
};
export default FacebookLoginButton;
