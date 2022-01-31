import { lazy, Suspense } from "react";
import useUser from "@appHooks/useUser";
import CircularProgress from "@mui/material/CircularProgress";

const UnVerifiedAccountSetting = lazy(() =>
  import("./UnVerifiedAccountSetting")
);
const VerifiedAccountSetting = lazy(() => import("./VerifiedAccountSetting"));

const CurrentUserSetting = () => {
  const user = useUser("emailVerified");

  return (
    <Suspense fallback={<CircularProgress />}>
      {user.emailVerified ? (
        <VerifiedAccountSetting />
      ) : (
        <UnVerifiedAccountSetting />
      )}
    </Suspense>
  );
};

export default CurrentUserSetting;
