import { UserAccountState } from "./../interfaces/index";
import { RootStateType } from "@appStore";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const useUserAccount = (
  ...userProps: (keyof UserAccountState)[]
): UserAccountState | null | undefined => {
  const userAccount = useSelector((state: RootStateType) => state.userAccount);
  const dependencies =
    userProps?.length > 0
      ? userProps.map(
          (key) => (userAccount as unknown as UserAccountState)[key]
        )
      : userAccount
      ? []
      : undefined;
  console.log("depenencied for user account:", dependencies);
  return useMemo(() => userAccount, dependencies);
};

export default useUserAccount;
