import { useDispatch } from "react-redux";
import { changeAuthStatus } from "@appFirebase/auth";
import useAuth from "./useAuth";
import { useCallback } from "react";

const useUpdateUser = () => {
  console.log("in update user hook");
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  return useCallback((user) => {
    if (user && user?.account)
      user.account = {
        isBalancePublic:
          user.account?.is_balance_public ?? user.account?.isBalancePublic,
        isInventoryPublic:
          user.account?.is_inventory_public ?? user.account?.isBalancePublic,
        isTradeable: user.account?.is_tradable ?? user.account?.isTradeable,
        bannerId: user.account?.banner_id ?? user.account?.bannerId,
        wallet: user.account?.wallet ?? user.account?.wallet,
        bank: user.account?.bank ?? user.account?.bank,
        bankLimit: user.account?.bank_limit ?? user.account?.bankLimit,
        level: user.account?.level ?? user.account?.level,
        hasPinCode: user.account?.has_pin_code ?? user.account?.hasPinCode,
      };
    dispatch(changeAuthStatus(user === null ? null : user || currentUser));
  }, []);
};

export default useUpdateUser;
