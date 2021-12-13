import Container from "@mui/material/Container";
import SkeletonLoading from "../SkeletonLoading";
import { lazy, Suspense } from "react";

const BasicSettings = lazy(() => import("./BasicSettings"));
const AdvancedSettings = lazy(() => import("./AdvancedSettings"));

const SettingPanels = ({ selectedIndex, sx }) => {
  const Panels = [BasicSettings, AdvancedSettings];

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
