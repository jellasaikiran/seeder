import { ComponentStory } from "@storybook/react";
import moment from "moment";
import { NewCashKickTemplate } from ".";
import { CONTRACT_SAMPLE_DATA } from "../../../utils/constants";
import { ContractsTable } from "../../organisms/ContractsTable";
import Header from "../../organisms/Header";
import { SummaryCard } from "../../organisms/SummaryCard";
import { TableBox } from "../../organisms/TableBox";

export default {
  title: "templates/NewCashKickTemplate",
  component: NewCashKickTemplate,
};

const Template: ComponentStory<typeof NewCashKickTemplate> = (args) => (
  <NewCashKickTemplate {...args} />
);

export const SummaryInitialPage = Template.bind({});
SummaryInitialPage.args = {
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
      sum={150000}
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
          variant={"cashkick-setup"}
          data={CONTRACT_SAMPLE_DATA}
          isSelected={[]}
          handleCheckboxChange={(index: number) => {}}
        />
      }
    />
  ),
};

export const SummaryReviewPage = Template.bind({});
SummaryReviewPage.args = {
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
      sum={150000}
      payout={150000}
      paybackamount={14059}
      rate={12345}
      handleReview={() => {}}
      variant={"summary-review"}
    />
  ),
  tableBox: (
    <TableBox
      text={"Selected contracts"}
      variant={"normal"}
      table={
        <ContractsTable
          variant={"cashkick-selected"}
          data={CONTRACT_SAMPLE_DATA}
          isSelected={[]}
          handleCheckboxChange={() => {}}
        />
      }
    />
  ),
};
