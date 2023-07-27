import {
  UserAccountState,
  BackendAccountResponse,
} from "./../interfaces/index";
import { useDispatch } from "react-redux";
import { updateUserAccountState } from "@backend/userAccountSlice";
import { useCallback } from "react";

const useUpdateUserAccount = () => {
  console.log("in update user hook");
  const dispatch = useDispatch();
  return useCallback((account: UserAccountState & BackendAccountResponse) => {
    if (typeof account !== "object") return;
    dispatch(updateUserAccountState(account));
  }, []);
};

export default useUpdateUserAccount;
