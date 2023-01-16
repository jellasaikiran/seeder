import { ComponentStory } from "@storybook/react";
import { CONTRACT_SAMPLE_DATA } from "../../../utils/constants";
import { ContractsTable } from ".";

export default {
  title: "Organisms/ContractsTable",
  component: ContractsTable,
};

const Template: ComponentStory<typeof ContractsTable> = (args) => (
  <ContractsTable {...args} />
);


export const cashkickSetup = Template.bind({});
cashkickSetup.args = {
  variant: "cashkick-setup",
  data: CONTRACT_SAMPLE_DATA,
  isSelected: [],
  handleCheckboxChange: () => {},
};

export const cashkickSelected = Template.bind({});
cashkickSelected.args = {
  variant: "cashkick-selected",
  data: CONTRACT_SAMPLE_DATA,
  isSelected: [],
  handleCheckboxChange: () => {},
};
