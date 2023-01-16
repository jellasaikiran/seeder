export type TABLE_CELL_VARIANT =
  | "highlighted-text"
  | "chip"
  | "normal-text"
  | "check-box";

export interface CONTRACT_TYPE {
  id: number;
  name: string;
  type: string;
  totalAmount: number;
  amountAvailable: number;
  // userId: string;
}
