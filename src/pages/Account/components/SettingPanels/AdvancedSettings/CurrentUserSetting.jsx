import { lazy, Suspense } from "react";
import useUser from "../../../../../hooks/useUser";
import CircularProgress from "@mui/material/CircularProgress";

const UnVerifiedAccountSetting = lazy(() =>
  import("./UnVerifiedAccountSetting")
);
const VerifiedAccountSettingForm = lazy(() =>
  import("./VerifiedAccountSettingForm")
);

export default () => {
  const user = useUser();

  return (
    <Suspense fallback={<CircularProgress />}>
      {user.emailVerified ? (
        <VerifiedAccountSettingForm />
      ) : (
        <UnVerifiedAccountSetting />
      )}
    </Suspense>
  );
};
