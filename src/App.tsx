import { ThemeProvider } from "@mui/material";
import ButtonComponent from "./components/atoms/Button";
import { theme } from "./theme/theme";
import "./styles.css";
import CheckboxComponent from "./components/atoms/Checkbox";
import TypographyComponent from "./components/atoms/Typography";
import { HomePage } from "./components/templates/HomePage/index.stories";
import Header from "./components/organisms/Header";
import moment from "moment";
import { Banner } from "./components/molecules/Banner";
import { CashKickCard } from "./components/molecules/CashCickCard";
import { TableBox } from "./components/organisms/TableBox";
import { PaymentsTable } from "./components/organisms/PaymentsTable";
import { NewCashKickTemplate } from "./components/templates/NewCashKickPage";
import { ContractsTable } from "./components/organisms/ContractsTable";
import { SummaryCard } from "./components/organisms/SummaryCard";
import { CONTRACT_SAMPLE_DATA } from "./utils/constants";

const App = () => {
  const homePagAargs = {
    headerBox: (
      <Header
        title={"Good Afternoon"}
        subtitle={moment().format("MMMM DD, YYYY")}
        width={100}
      />
    ),
    cardsGrid: <Banner />,
    cashKickCard: (
      <CashKickCard balanceAmount={"$87,63,452"} handleClick={() => {}} />
    ),
    tableBox: (
      <TableBox
        text={"Your payments"}
        variant={"normal"}
        table={
          <PaymentsTable
            amount={[170454.55]}
            cashKickDate={[moment().format("MMM DD, YYYY")]}
          />
        }
      />
    ),
  };

  const newCashKickArgs = {
    headerBox: (
      <Header
        title={"New Cash Kick"}
        subtitle={"Let’s setup a new cash kick to power your Saas"}
        width={100}
      />
    ),
    summaryBox: (
      <SummaryCard
        term={12}
        selectedcontracts={3}
        handleReset={() => {}}
        value={0}
        sum={0}
        handleSliderChange={() => {}}
        payout={150000}
        paybackamount={14059}
        rate={12345}
        handleReview={() => {}}
        variant={"summary-slider"}
      />
    ),
    tableBox: (
      <TableBox
        text={"Your Contracts"}
        variant={"normal"}
        table={
          <ContractsTable
            variant={"cashkick-selected"}
            data={CONTRACT_SAMPLE_DATA}
            isSelected={[]}
            handleCheckboxChange={(index: number) => {}}
          />
        }
      />
    ),
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePage {...homePagAargs}></HomePage>
        {/* <NewCashKickTemplate {...newCashKickArgs} /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
