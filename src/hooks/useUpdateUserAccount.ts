import { useDispatch } from "react-redux";
import { updateUserAccountState } from "@backend/userAccountSlice";
import { useCallback } from "react";

const useUpdateUserAccount = () => {
  console.log("in update user hook");
  const dispatch = useDispatch();
  return useCallback((account) => {
    const accountToUpdate = {
      isBalancePublic: account?.is_balance_public ?? account?.isBalancePublic,
      isInventoryPublic:
        account?.is_inventory_public ?? account?.isBalancePublic,
      isTradable: account?.is_tradable ?? account?.isTradable,
      bannerId: account?.banner_id ?? account?.bannerId,
      wallet: account?.wallet ?? account?.wallet,
      bank: account?.bank ?? account?.bank,
      bankLimit: account?.bank_limit ?? account?.bankLimit,
      level: account?.level ?? account?.level,
      hasPinCode: account?.has_pin_code ?? account?.hasPinCode,
    };
    dispatch(updateUserAccountState(accountToUpdate));
  }, []);
};

export default useUpdateUserAccount;
