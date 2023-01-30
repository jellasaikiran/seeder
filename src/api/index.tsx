import { CONTRACT_TYPE } from "../utils/types";
import { CONTRACTS_URL, PAYMENTS_URL } from "../utils/urls";
import axios from "axios";

export const getContracts = async () => {
  let contracts: CONTRACT_TYPE[] | null = [];

  await axios
    .get(CONTRACTS_URL)
    .then((res) => {
      contracts = res.data;
    })
    .catch((err) => console.log("cannot fetch contracts " + err));

  return contracts;
};

export const postCashKicks = async (cashKick: any) => {
  let response: any;

  await axios
    .post(PAYMENTS_URL, { ...cashKick })
    .then((res) => {
      response = res.data;
    })
    .catch((err) => console.log("cannot post cash kicks " + err));

  return response;
};

export const getPayments = async () => {
  let response: any;

  await axios
    .get(PAYMENTS_URL)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => console.log("cannot fetch payments " + err));

  return response;
};