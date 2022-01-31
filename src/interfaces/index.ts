export interface UserAccountState {
  level?: number;
  wallet?: string;
  bank?: string;
  bankLimit?: string;
  isBalancePublic?: boolean;
  isInventoryPublic?: boolean;
  isTradable?: boolean;
}
