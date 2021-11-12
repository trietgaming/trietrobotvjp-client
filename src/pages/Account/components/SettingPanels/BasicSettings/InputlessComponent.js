import { memo } from "react";
import {
  Typography,
  Container,
  Divider,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import SocialButton from "../../../../Authentication/shared-components/SocialButton";
import { FacebookRounded } from "@mui/icons-material";
import { DiscordIcon } from "../../../../../assets/icons";

const UserAvatarChanger = ({ photoURL }) => {
  return (
    <>
      <Avatar
        alt="Avatar"
        src={photoURL || "/default-avatar.jpg"}
        sx={{ width: 128, height: 128, mb: 2.5 }}
      />
      <Typography align="center" variant="body1" color="inherit">
        Ảnh đại diện
      </Typography>
    </>
  );
};

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

const IDAndEmailFields = memo(
  ({
    uid,
    email,
    emailVerified,
    isVerificationEmailSent,
    handleSendVerificationEmail,
    isVerificationEmailSending,
  }) => {
    console.log("rerender IDAndEmail");
    return (
      <>
        <TextField
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          label="ID"
          defaultValue={uid}
          sx={{ width: "100%", mb: 6 }}
        />
        <TextField
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          label="Email"
          defaultValue={email}
          sx={{ width: "100%" }}
          helperText={
            !emailVerified && (
              <Button
                sx={{ position: "absolute", right: 0 }}
                onClick={
                  isVerificationEmailSent
                    ? undefined
                    : handleSendVerificationEmail
                }
                disabled={isVerificationEmailSending || isVerificationEmailSent}
              >
                Xác thực email
              </Button>
            )
          }
        />
      </>
    );
  }
);

const SocialLinkingComponent = memo(
  ({ handleFacebookLinking, handleDiscordLinking }) => {
    console.log("rerender sol");
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
          >
            Liên kết tài khoản Facebook
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

export {
  JoinedDate,
  SocialLinkingComponent,
  IDAndEmailFields,
  PanelHeader,
  UserAvatarChanger,
};
