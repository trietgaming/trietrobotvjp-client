import { useDispatch } from "react-redux";
import { changeAuthStatus } from "@appFirebase/auth";
import useUser from "./useUser";
import { useCallback } from "react";

const useUpdateUser = () => {
  const dispatch = useDispatch();
  const currentUser = useUser();
  return useCallback((user) => {
    dispatch(changeAuthStatus(user || currentUser));
  }, []);
};

export default useUpdateUser;
