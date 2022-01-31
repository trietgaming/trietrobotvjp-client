import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import useUser from "@appHooks/useUser";
import { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const VerifiedPasswordChange = lazy(() => import("./VerifiedPasswordChange"));
const UnVerifiedPasswordChange = lazy(() =>
  import("./UnVerifiedPasswordChange")
);

const PasswordChange = () => {
  const { emailVerified } = useUser("emailVerified");
  return (
    <Paper
      sx={{
        visibility: {
          xs: "hidden",
          md: "visible",
        },
      }}
    >
      <Box
        sx={{
          visibility: "visible",
          py: { xs: 2, md: 4 },
          mx: { xs: 0, md: 3 },
        }}
      >
        <Suspense
          fallback={<CircularProgress sx={{ display: "flex", mx: "auto" }} />}
        >
          {emailVerified ? VerifiedPasswordChange : UnVerifiedPasswordChange}
        </Suspense>
      </Box>
    </Paper>
  );
};

export default PasswordChange;
