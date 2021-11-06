import { lazy } from "react";
import { useSelector } from "react-redux";
const DefaultNavigation = lazy(() => import("./DefaultNavigation"));
const UserNavigation = lazy(() => import("./UserNavigation"));

const Navigation = () => {
  const { authenticated } = useSelector((state) => state.auth);
  return authenticated ? <UserNavigation /> : <DefaultNavigation />;
};

export default Navigation;
