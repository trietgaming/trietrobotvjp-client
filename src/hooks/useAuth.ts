import { RootStateType } from "@appStore";
import { useSelector } from "react-redux";

const useAuth = () => {
  return useSelector((state: RootStateType) => state.auth.firebase.getAuth)();
};

export default useAuth;
