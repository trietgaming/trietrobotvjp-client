import { lazy, Suspense } from "react";
import useUser from "../../../../../hooks/useUser";
import CircularProgress from "@mui/material/CircularProgress";

const UnVerifiedAccountSetting = lazy(() =>
  import("./UnVerifiedAccountSetting")
);
const VerifiedAccountSetting = lazy(() => import("./VerifiedAccountSetting"));

export default () => {
  const user = useUser();

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
