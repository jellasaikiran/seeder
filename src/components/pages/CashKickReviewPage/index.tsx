import moment from "moment";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postCashKicks } from "../../../api";
import { CONTRACT_TYPE } from "../../../utils/types";
import { ContractsTable } from "../../organisms/ContractsTable";
import Header from "../../organisms/Header";
import { SubmitModal } from "../../organisms/Modal";
import { SummaryCard } from "../../organisms/SummaryCard";
import { TableBox } from "../../organisms/TableBox";
import { NewCashKickTemplate } from "../../templates/NewCashKickPage";

type locationState = {
  payout: number;
  selectedArray: boolean[];
  data: CONTRACT_TYPE[];
};

export const CashKickReviewPage = () => {
  const location = useLocation();
  const reviewData = location.state as locationState;
  const navigate = useNavigate();
  const [modalState, setModalState] = useState<"Closed" | "Open">("Closed");
  const [inputValue, setInputValue] = useState("");

  const getSelectedData = () => {
    let selectedData: CONTRACT_TYPE[] = [];
    reviewData.data.forEach((contract, index) => {
      if (reviewData.selectedArray[index]) {
        selectedData.push(contract);
      }
    });
    return selectedData;
  };

  const handleSubmit = () => {
    setModalState("Open");
  };

  const handleModalClose = () => {
    setModalState("Closed");
  };

  const handleModalInput = (cashkickName: string) => {
    setInputValue(cashkickName);
  };

  const handleModalSubmit = () => {
    let postBody = {
      name: inputValue,
      amount: reviewData.payout * 0.88,
      timestamp: moment().format("YYYY-MM-DD"),
    };
    postCashKicks(postBody).then((res) => {
      navigate("/");
    });
  };

  return (
    <>
      <NewCashKickTemplate
        headerBox={
          <Header
            title={"New Cash Kick"}
            subtitle={"Let’s setup a new cash kick to power your Saas"}
            width={100}
          />
        }
        summaryBox={
          <SummaryCard
            term={12}
            selectedcontracts={
              reviewData.selectedArray.filter(
                (value: boolean) => value === true
              ).length
            }
            value={reviewData.payout}
            sum={0}
            payout={reviewData.payout * 0.88}
            paybackamount={reviewData.payout}
            rate={reviewData.payout * 0.12}
            handleReview={handleSubmit}
            variant={"summary-review"}
          />
        }
        tableBox={
          <TableBox
            text={"Selected contracts"}
            variant={"normal"}
            table={
              <ContractsTable
                variant={"cashkick-selected"}
                data={getSelectedData()}
                isSelected={[]}
                handleCheckboxChange={() => {}}
              />
            }
          />
        }
      />
      {modalState == "Open" && (
        <SubmitModal
          open={true}
          handleClose={handleModalClose}
          disabled={inputValue ? false : true}
          input={inputValue}
          handleInputBox={handleModalInput}
          handleSubmit={handleModalSubmit}
        />
      )}
    </>
  );
};
