import { memo } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SocialButton from "../../../../Authentication/shared-components/SocialButton";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import { DiscordIcon } from "@assets/icons";

const PanelHeader = memo(() => {
  console.log("header RErender");
  return (
    <Typography
      variant="h5"
      align="center"
      color="inherit"
      sx={{ mb: 6, pt: 4 }}
    >
      CÀI ĐẶT CƠ BẢN
    </Typography>
  );
});

const SocialLinkingComponent = memo(
  ({ handleLinkFBAccount, handleDiscordLinking, providerData }) => {
    console.log("rerender sol");
    const FBData = providerData.find(
      (provider) => provider.providerId === "facebook.com"
    );
    return (
      <>
        <Container>
          <Divider />
          <SocialButton
            bgColor="#5865F2"
            Icon={DiscordIcon}
            textColor="white"
            sx={{ mt: 3 }}
          >
            Liên kết tài khoản Discord
          </SocialButton>
        </Container>
        <Container>
          <SocialButton
            bgColor="#3360ff"
            Icon={FacebookRounded}
            textColor="white"
            sx={{ my: 2 }}
            onClick={handleLinkFBAccount}
            disabled={Boolean(FBData)}
          >
            {FBData?.displayName || "Liên kết tài khoản Facebook"}
          </SocialButton>
        </Container>
      </>
    );
  }
);

const JoinedDate = memo(({ createdAt }) => {
  console.log("rerender typ");
  const joinedDate = new Date(+createdAt);
  return (
    <Typography variant="body1" color="inherit" sx={{ mt: 3, mb: 4 }}>
      Ngày tham gia:{" "}
      {`${joinedDate.getDate()}/${
        joinedDate.getMonth() + 1
      }/${joinedDate.getFullYear()}`}
    </Typography>
  );
});

export { JoinedDate, SocialLinkingComponent, PanelHeader };
