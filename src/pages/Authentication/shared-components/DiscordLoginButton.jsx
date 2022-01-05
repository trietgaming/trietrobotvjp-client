import SocialButton from "./SocialButton";
import { DiscordIcon } from "@assets/icons";
import { discordColor } from "@assets/styles/colors";

const DiscordLoginButton = () => (
  <SocialButton
    bgColor={discordColor}
    Icon={DiscordIcon}
    textColor="white"
    sx={{ mt: 2 }}
    href={import.meta.env.VITE_DISCORD_OAUTH2_URL}
  >
    Tiếp tục với Discord
  </SocialButton>
);

export default DiscordLoginButton;
