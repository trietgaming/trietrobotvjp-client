import { useDispatch } from "react-redux";
import { changeAuthStatus } from "@appFirebase/auth";
import useAuth from "./useAuth";
import { useCallback } from "react";

const useUpdateUser = () => {
  console.log("in update user hook");
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  return useCallback((user) => {
    dispatch(changeAuthStatus(user || currentUser));
  }, []);
};

export default useUpdateUser;
