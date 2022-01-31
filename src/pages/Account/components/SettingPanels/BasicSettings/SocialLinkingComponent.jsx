import SocialButton from "../../../../Authentication/shared-components/SocialButton";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import { DiscordIcon } from "@assets/icons";
import useUser from "@appHooks/useUser";
import { getIdToken, unlink } from "@firebase/auth";
import useEnqueueSnackbar from "@appHooks/useEnqueueSnackbar";
import { useState, useMemo, memo } from "react";

const SocialLinkingComponent = memo(() => {
  const user = useUser("providerData");
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
      <SocialButton
        bgColor="#5865F2"
        Icon={DiscordIcon}
        textColor="white"
        disabled={status.loading}
        onClick={() => handleSocialAction("discord")}
        size="large"
      >
        {discordData?.uid
          ? !status.discord.sure
            ? `Hủy liên kết: ID ${discordData?.uid}`
            : "Xác nhận hủy liên kết?"
          : "Liên kết Discord"}
      </SocialButton>
      <SocialButton
        bgColor="#3360ff"
        Icon={FacebookRounded}
        textColor="white"
        sx={{ my: 2 }}
        onClick={() => handleSocialAction("facebook")}
        disabled={status.loading}
        size="large"
      >
        {FBData?.uid
          ? !status.facebook.sure
            ? `Hủy liên kết: ID ${FBData?.uid}`
            : "Xác nhận hủy liên kết?"
          : "Liên kết Facebook"}
      </SocialButton>
    </>
  );
});

export default SocialLinkingComponent;
