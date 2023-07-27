export interface UserAccountState {
  level?: number;
  wallet?: string;
  bank?: string;
  bankLimit?: string;
  isBalancePublic?: boolean;
  isInventoryPublic?: boolean;
  isTradable?: boolean;
}

export interface BackendAccountResponse {
  level?: number;
  wallet?: string;
  bank?: string;
  bank_limit?: string;
  is_balance_public?: boolean;
  is_inventory_public?: boolean;
  is_tradable?: boolean;
}
