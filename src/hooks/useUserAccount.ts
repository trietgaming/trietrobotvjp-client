import { UserAccountState } from "./../interfaces/index";
import { RootStateType } from "@appStore";
import { useSelector } from "react-redux";
import { useRef, useMemo } from "react";

const useUserAccount = (
  ...userProps: (keyof UserAccountState)[]
): UserAccountState | null | undefined => {
  const userAccount = useSelector((state: RootStateType) => state.userAccount);
  const dependencies = useRef(
    userProps?.length > 0
      ? userProps.map(
          (key) => (userAccount as unknown as UserAccountState)[key]
        )
      : userAccount
      ? []
      : undefined
  ).current;
  return useMemo(() => userAccount, dependencies);
};

export default useUserAccount;
