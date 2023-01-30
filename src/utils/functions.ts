import moment from "moment";

export const formatAmount = (amount: number) => {
  return amount
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const dateDifference = (date:any) => {
  const currentdate = moment().format("MMM DD, YYYY");
  const difference = moment(`${date}`, "MMM DD, YYYY").diff(
    moment(`${currentdate}`, "MMM DD, YYYY"),
    "days"
  );
  return difference;
};
