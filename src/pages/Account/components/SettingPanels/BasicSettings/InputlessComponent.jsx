import { memo } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SocialButton from "../../../../Authentication/shared-components/SocialButton";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import { DiscordIcon } from "@assets/icons";
import useUser from "@customHooks/useUser";
import { getIdToken, unlink } from "@firebase/auth";
import useEnqueueSnackbar from "@customHooks/useEnqueueSnackbar";
import { useState, useMemo } from "react";

const SocialLinkingComponent = memo(() => {
  const user = useUser();
  const enqueueSnackbar = useEnqueueSnackbar();
  const [status, setStatus] = useState({
    loading: false,
    discord: {
      sure: false,
    },
    facebook: {
      sure: false,
    },
  });

  const FBData = useMemo(
    () =>
      user.providerData.find(
        (provider) => provider.providerId === "facebook.com"
      ),
    [user.providerData]
  );

  const discordData = useMemo(
    () =>
      user.providerData.find(
        (provider) => provider.providerId === "twitter.com"
      ),
    [user.providerData]
  );

  const handleSocialAction = async (provider) => {
    const mainData = provider === "discord" ? discordData : FBData;
    if (!status[provider].sure && mainData?.uid)
      return setStatus((prev) => ({
        ...prev,
        loading: false,
        [provider]: { sure: true },
      }));

    const main = async () => {
      if (mainData)
        return await unlink(
          user,
          provider === "discord" ? "twitter.com" : "facebook.com"
        )
          .then(() =>
            enqueueSnackbar({
              message: "Hủy liên kết thành công",
              variant: "success",
            })
          )
          .catch((err) => {
            console.log(err);
            enqueueSnackbar({ errCode: err.code, persist: true });
          });

      location.assign(
        `${
          provider === "discord"
            ? import.meta.env.VITE_DISCORD_LINKING_URL
            : import.meta.env.VITE_FACEBOOK_LINKING_URL
        }&state=${await getIdToken(user, true)}`
      );
    };
    setStatus((prev) => ({
      ...prev,
      loading: true,
      [provider]: {
        sure: false,
      },
    }));
    await main();
    setStatus((prev) => ({
      ...prev,
      loading: false,
      [provider]: { sure: !mainData },
    }));
  };

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
          disabled={status.loading}
          onClick={() => handleSocialAction("discord")}
        >
          {discordData?.uid
            ? !status.discord.sure
              ? `Hủy liên kết: ID ${discordData?.uid}`
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
          onClick={() => handleSocialAction("facebook")}
          disabled={status.loading}
        >
          {FBData?.uid
            ? !status.facebook.sure
              ? `Hủy liên kết: ID ${FBData?.uid}`
              : "Xác nhận hủy liên kết?"
            : "Liên kết Facebook"}
        </SocialButton>
      </Container>
    </>
  );
});

const JoinedDate = memo(({ joinedDate }) => {
  console.log("rerender typ");
  const _joinedDate = new Date(+joinedDate);
  return (
    <Typography variant="body1" color="inherit" sx={{ mt: 3, mb: 4 }}>
      Ngày tham gia: {_joinedDate.toLocaleDateString("vi")}
    </Typography>
  );
});

export { JoinedDate, SocialLinkingComponent };
