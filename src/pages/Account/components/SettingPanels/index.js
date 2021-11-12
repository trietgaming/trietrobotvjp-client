import { Container, Skeleton } from "@mui/material";
import { lazy, Suspense } from "react";

const BasicSettings = lazy(() => import("./BasicSettings"));

const SkeletonLoading = () => {
  return (
    <>
      <Skeleton variant="rectangular" width="100%" height={45} />
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Skeleton
          variant="circular"
          width={128}
          height={128}
          sx={{ display: "inline-block", mt: 3, pr: 16, mr: 10 }}
        />
        <Container>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={45}
            sx={{ display: "inline-block", mt: 3 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={45}
            sx={{ display: "block", mt: 3 }}
          />
        </Container>
      </Container>
      <Skeleton variant="rectangular" width="100%" height={45} sx={{ mt: 3 }} />
      <Skeleton
        variant="rectangular"
        width="100%"
        height="50%"
        sx={{ my: 3 }}
      />
    </>
  );
};

const SettingPanels = ({ selectedIndex, sx }) => {
  const Panels = [BasicSettings, BasicSettings];

  const ActivePanel = Panels[selectedIndex];

  return (
    <Container maxWidth="md" sx={{ ...sx }}>
      <Suspense fallback={<SkeletonLoading />}>
        <ActivePanel />
      </Suspense>
    </Container>
  );
};

export default SettingPanels;
