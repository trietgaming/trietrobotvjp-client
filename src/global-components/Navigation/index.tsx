import { RootStateType } from "@appStore";
import { useSelector } from "react-redux";
import DefaultNavigation from "./DefaultNavigation";
import UserNavigation from "./UserNavigation";

const Navigation = () => {
  const isAuthenticated = useSelector(
    (state: RootStateType) => state.auth.isAuthenticated
  );
  return isAuthenticated ? <UserNavigation /> : <DefaultNavigation />;
};

export default Navigation;
