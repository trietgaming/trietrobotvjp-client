import Container from "@mui/material/Container";
import SkeletonLoading from "../SkeletonLoading";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const BasicSettings = lazy(() => import("./BasicSettings"));
const AdvancedSettings = lazy(() => import("./AdvancedSettings"));
const PasswordChange = lazy(() => import("./PasswordChange"));

const SettingPanels = () => {
  return (
    <Container maxWidth="md" sx={{ mx: "auto", my: 3 }}>
      <Suspense fallback={<SkeletonLoading />}>
        <Switch>
          <Route path={["/account", "/account/basic"]} exact>
            <BasicSettings />
          </Route>
          <Route path="/account/advanced" exact>
            <AdvancedSettings />
          </Route>
          <Route
            path={["/password-change", "/change-password", "/reset-password"]}
          >
            <PasswordChange />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default SettingPanels;
