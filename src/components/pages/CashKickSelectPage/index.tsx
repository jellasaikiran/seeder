import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getContracts } from "../../../api";
import { CONTRACT_TYPE } from "../../../utils/types";
import { ContractsTable } from "../../organisms/ContractsTable";
import Header from "../../organisms/Header";
import { SummaryCard } from "../../organisms/SummaryCard";
import { TableBox } from "../../organisms/TableBox";
import { NewCashKickTemplate } from "../../templates/NewCashKickPage";

export const CashKickSelectPage = () => {
  const [contracts, setContracts] = useState<CONTRACT_TYPE[]>([]);
  const [isSelected, setIsSelected] = useState<boolean[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [indeterminate, setIndeterminate] = useState(false);
  const [allRowsChecked, setAllRowsChecked] = useState(false);
  const [selectHistory, setSelectHistory] = useState<number[]>([]);

  useEffect(() => {
    getContracts().then((res) => {
      setContracts(res);
      const contractDetails = getTotalContractDetails(res);
      setIsSelected([...contractDetails[1]]);
      setTotalAmount(contractDetails[0]);
    });
  }, []);

  const getTotalContractDetails = (
    res: CONTRACT_TYPE[]
  ): [number, boolean[]] => {
    let selectedArray: boolean[] = isSelected;
    let sum = 0;
    res.forEach((contract) => {
      sum += contract.amount;
      selectedArray.push(false);
    });
    return [sum, selectedArray];
  };
  
  const handleReset = () => {
    isSelected.fill(false);
    setIsSelected([...isSelected]);
    selectHistory.splice(0, selectHistory.length);
    setSelectHistory([...selectHistory]);
    setValue(0);
  };

  const handleCreateCashKick = () => {
    navigate("/cashkick/review", {
      state: { payout: value, selectedArray: isSelected, data: contracts },
    });
  };

  const handleSliderChange = (event: Event, newValue: number) => {
    if (newValue > value) {
      newValue = handleCheckBoxOnSliderForwardChange(newValue, value);
    } else {
      newValue = handleCheckBoxOnSliderBackWardChange(newValue, value);
    }
    setAllRowsChecked(areAllRowsChecked());
    setIndeterminate(isIndeterminate());
    setValue(newValue);
  };

  const handleCheckBoxOnSliderForwardChange = (
    sliderValue: number,
    actualValue: number
  ) => {
    while (sliderValue > actualValue) {
      let indexToBeChecked = isSelected.indexOf(false);
      isSelected[indexToBeChecked] = true;
      setIsSelected([...isSelected]);
      actualValue = handleAmount(isSelected);
      selectHistory.push(indexToBeChecked);
      setSelectHistory([...selectHistory])
    }
    return actualValue;
  };

  const handleCheckBoxOnSliderBackWardChange = (
    sliderValue: number,
    actualValue: number
  ) => {
    while (sliderValue < actualValue && selectHistory.length>0) {
      let recentSelectedIndex = selectHistory[selectHistory.length - 1];
      isSelected[recentSelectedIndex] = false;
      setIsSelected([...isSelected]);
      actualValue = handleAmount(isSelected);
      selectHistory.splice(selectHistory.length - 1, 1);
      setSelectHistory([...selectHistory])
    }
    return actualValue;
  };

  const handleCheckboxChange = (index: number) => {
    isSelected[index] = !isSelected[index];
    setIsSelected([...isSelected]);
    if (isSelected[index]) {
      selectHistory.push(index);
    } else {
      selectHistory.splice(selectHistory.indexOf(index, 0), 1);
    }
    setSelectHistory([...selectHistory]);
    handleAmount(isSelected);
    setIndeterminate(isIndeterminate());
  };

  const handleAmount = (selected: boolean[]) => {
    let amount = 0;
    for (let i = 0; i < selected.length; i++) {
      if (selected[i]) {
        amount = amount + contracts[i].amount;
      }
    }
    setValue(amount);
    return amount;
  };

  const handleHeaderCheckboxChange = () => {
    if (!indeterminate && !allRowsChecked) {
      isSelected.forEach((value, index) => {
        selectHistory.push(index);
        isSelected[index] = true;
      });
    } else {
      selectHistory.splice(0, selectHistory.length);
      isSelected.forEach((value, index) => {
        isSelected[index] = false;
      });
    }
    setSelectHistory([...selectHistory]);
    setIsSelected([...isSelected]);
    handleAmount(isSelected);
    setAllRowsChecked(areAllRowsChecked());
    setIndeterminate(isIndeterminate());
  };

  const isIndeterminate = () => {
    let flag = false;
    isSelected.forEach((value) => {
      flag = flag || value;
    });
    return flag;
  };

  const areAllRowsChecked = () => {
    let flag = true;
    isSelected.forEach((value) => {
      flag = flag && value;
    });
    return flag;
  };

  return (
    <>
      <NewCashKickTemplate
        headerBox={
          <Header
            title={"New cash kick"}
            subtitle={"Let’s setup a new cash kick to power your Saas"}
            width={100}
          />
        }
        summaryBox={
          <SummaryCard
            term={12}
            selectedcontracts={
              isSelected.filter((value) => value === true).length
            }
            handleReset={handleReset}
            value={value}
            sum={totalAmount}
            handleSliderChange={handleSliderChange}
            payout={value * 0.88}
            paybackamount={value}
            rate={value * 0.12}
            handleReview={handleCreateCashKick}
            variant={"summary-slider"}
          />
        }
        tableBox={
          <TableBox
            text={"Your Contracts"}
            variant={"normal"}
            table={
              <ContractsTable
                variant={"cashkick-setup"}
                data={contracts}
                isSelected={isSelected}
                handleCheckboxChange={handleCheckboxChange}
                areAllRowsChecked={allRowsChecked}
                isIndeterminate={indeterminate}
                handleHeaderCheckboxChange={handleHeaderCheckboxChange}
              />
            }
          />
        }
      />
    </>
  );
};
