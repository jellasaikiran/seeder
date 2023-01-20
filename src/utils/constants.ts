import { CONTRACT_TYPE } from "./types";

export const GREETING = "Congratulations you are ready to start!";
export const FUNDING =
  "You are approved for funding. We are ready to advance you upto ";
export const AMOUNT = "$8.8M";
export const CREATE_CASH_KICK = "Name your cash kick";
export const LOGOUT = "Logout";
export const CASHKICK_TABLE_HEAD_CELL = [
  "Name",
  "Status",
  "Maturity",
  "Total received",
  "Total financed",
];
export const PAYMENTS_TABLE_HEAD_CELL = [
  "Due date",
  "Status",
  "Expected amount",
  "Outstanding",
];
export const CONTRACT_SAMPLE_DATA: CONTRACT_TYPE[] = [
  {
    id: 1,
    name: "Contract1",
    type: "Monthly",
    amount: 144003
  },
  {
    id: 2,
    name: "Contract2",
    type: "Monthly",
    amount: 60360,
  },
  {
    id: 3,
    name: "Contract3",
    type: "Monthly",
    amount: 60360,
  },
];
export const CASHKICK_SAMPLE_DATA = [
  {
    id: 1,
    name: "My First Advance",
    createdDate: "September 22, 2022",
    cashkickAmount: 170454.55,
  },
];
export const CONTRACT_TABLE_HEADERS = [
  "Name",
  "Type",
  "Per payment",
  "Term length",
  "Payment amount",
];
export const SELECTED = " selected of $";
export const SUM = "Summary";
export const TERM = "Term";
export const SEL = "Selected contracts";
export const PAY = "Pay back amount";
export const RATE = "Rate%";
export const TOT = "Total payout";
export const INTEREST = "(12.00%)";
export const ZERO_INTEREST = "(0.00%)";
