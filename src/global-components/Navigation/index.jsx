import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { lazy, Suspense } from "react";
const DefaultNavigation = lazy(() => import("./DefaultNavigation"));
const UserNavigation = lazy(() => import("./UserNavigation"));

const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Suspense
      fallback={
        <AppBar position="sticky">
          <Toolbar />
        </AppBar>
      }
    >
      {isAuthenticated ? <UserNavigation /> : <DefaultNavigation />}
    </Suspense>
  );
};

export default Navigation;
