import { useDispatch } from "react-redux";
import { changeAuthStatus } from "@appFirebase/auth";
import useAuth from "./useAuth";
import { useCallback } from "react";
import { User } from "@firebase/auth";

const useUpdateUser = () => {
  console.log("in update user hook");
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  return useCallback((user?: null | User) => {
    dispatch(changeAuthStatus(user === null ? null : user || currentUser));
  }, []);
};

export default useUpdateUser;
