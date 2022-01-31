import { createSlice } from "@reduxjs/toolkit";
import { UserAccountState } from "@interfaces";

const userAccountSlice = createSlice({
  name: "userAccount",
  initialState: {} as UserAccountState,
  reducers: {
    updateUserAccountState(
      state,
      {
        payload: {
          level,
          wallet,
          bank,
          bankLimit,
          isBalancePublic,
          isInventoryPublic,
          isTradable,
        },
      }: { payload: UserAccountState }
    ) {
      return {
        ...state,
        level,
        wallet,
        bank,
        bankLimit,
        isBalancePublic,
        isInventoryPublic,
        isTradable,
      };
    },
  },
});

export const { updateUserAccountState } = userAccountSlice.actions;

const userAccount = userAccountSlice.reducer;

export default userAccount;
