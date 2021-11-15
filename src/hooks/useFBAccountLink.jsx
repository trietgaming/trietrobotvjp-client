import { useCallback } from "react";
import { linkWithPopup } from "@firebase/auth";
import { useSelector } from "react-redux";
import useUser from "./useUser";

const useFBAccountLink = () => {
  const currentUser = useUser();
  const getFBProvider = useSelector(
    (state) => state.auth.firebase.getFBProvider
  );
  const FBProvider = getFBProvider();
  return useCallback(() => {
    console.log(currentUser.displayName)
    return linkWithPopup(currentUser, FBProvider);
  }, []);
};

export default useFBAccountLink;
