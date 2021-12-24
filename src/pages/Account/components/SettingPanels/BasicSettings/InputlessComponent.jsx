import { memo } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SocialButton from "../../../../Authentication/shared-components/SocialButton";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import { DiscordIcon } from "@assets/icons";
import useUser from "@customHooks/useUser";
import useUpdateUser from "@customHooks/useUpdateUser";
import { getIdToken } from "@firebase/auth";
import axios from "axios";
import { useSnackbar } from "notistack";
import getErrorTranslated from "@appFirebase/errorCodeTranslator";
import { useState } from "react";

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

const SocialLinkingComponent = memo(() => {
  console.log("rerender sol");
  const user = useUser();
  const updateUser = useUpdateUser();
  const { enqueueSnackbar } = useSnackbar();
  const [discordStatus, setDiscordStatus] = useState({
    loading: false,
    sure: false,
  });
  const [FBStatus, setFBStatus] = useState({
    loading: false,
    sure: false,
  });

  const FBData = user.providerData.find(
    (provider) => provider.providerId === "facebook.com"
  );
  const handleDiscordAction = async (e) => {
    if (!discordStatus.sure)
      return setDiscordStatus((prev) => ({ ...prev, sure: true }));

    const main = async () => {
      const idToken = await getIdToken(user, true);
      user.account.discordId
        ? await axios
            .delete(import.meta.env.VITE_DISCORD_UNLINKING_URL, {
              headers: {
                token: idToken,
              },
            })
            .then((res) => {
              if (!res.data.ok || !res.data.account) throw "unexpected";
              user.account = res.data.account;
              updateUser();
              enqueueSnackbar("Hủy liên kết thành công", {
                variant: "success",
              });
            })
            .catch((err) => {
              console.log(err);
              enqueueSnackbar(getErrorTranslated(err.response?.code), {
                variant: "error",
                persist: true,
              });
            })
        : window.location.assign(
            `${import.meta.env.VITE_DISCORD_LINKING_URL}&state=${idToken}`
          );
    };
    setDiscordStatus((prev) => ({
      ...prev,
      loading: true,
    }));
    await main();
    setDiscordStatus((prev) => ({
      ...prev,
      loading: false,
      sure: !Boolean(user.account.discordId),
    }));
  };

  const handleFBAction = () => {};
  return (
    <>
      <Container>
        <Divider />
        <SocialButton
          bgColor="#5865F2"
          Icon={DiscordIcon}
          textColor="white"
          sx={{
            mt: 3,
          }}
          disabled={discordStatus.loading || Boolean(!user.account)}
          onClick={handleDiscordAction}
        >
          {user.account?.discordId
            ? !discordStatus.sure
              ? `Hủy liên kết: ID ${user.account?.discordId}`
              : "Xác nhận hủy liên kết?"
            : "Liên kết Discord"}
        </SocialButton>
      </Container>
      <Container>
        <SocialButton
          bgColor="#3360ff"
          Icon={FacebookRounded}
          textColor="white"
          sx={{ my: 2 }}
          onClick={handleFBAction}
        >
          {FBData?.displayName || "Liên kết Facebook"}
        </SocialButton>
      </Container>
    </>
  );
});

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
