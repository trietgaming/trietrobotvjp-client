import { BackendAccountResponse } from "./../interfaces/index";
import { createSlice } from "@reduxjs/toolkit";
import { UserAccountState } from "@interfaces";

const userAccountSlice = createSlice({
  name: "userAccount",
  initialState: {} as UserAccountState,
  reducers: {
    updateUserAccountState(
      prevAccount,
      { payload }: { payload: UserAccountState & BackendAccountResponse }
    ) {
      return {
        isBalancePublic:
          payload.is_balance_public ??
          payload.isBalancePublic ??
          prevAccount?.isBalancePublic,
        isInventoryPublic:
          payload.is_inventory_public ??
          payload.isInventoryPublic ??
          prevAccount?.isInventoryPublic,
        isTradable:
          payload.is_tradable ?? payload.isTradable ?? prevAccount!.isTradable,
        // bannerId: account?.banner_id ?? account?.bannerId,
        wallet: payload.wallet ?? prevAccount?.wallet,
        bank: payload.bank ?? prevAccount?.bank,
        bankLimit:
          payload.bank_limit ?? payload.bankLimit ?? prevAccount?.bankLimit,
        level: payload.level ?? prevAccount?.level,
      };
    },
  },
});

export const { updateUserAccountState } = userAccountSlice.actions;

const userAccount = userAccountSlice.reducer;

export default userAccount;
