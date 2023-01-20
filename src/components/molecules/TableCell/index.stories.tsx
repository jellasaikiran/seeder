import { ComponentMeta, ComponentStory } from "@storybook/react";
import TableCell from ".";

export default {
  title: "Molecules/TableCell",
  component: TableCell,
  argsTypes: {
    variant: {
      options: ["highlighted-text", "chip", "normal-text"],
      control: { type: "radio" },
    },
    isSelected: { control: "boolean" },
    isStriked: { control: "boolean" },
    isHeader: { control: "boolean" },
  },
} as ComponentMeta<typeof TableCell>;

const Template: ComponentStory<typeof TableCell> = (args) => (
  <TableCell {...args} />
);

export const status = Template.bind({});
status.args = {
  variant: "chip",
  content: ["Upcoming"],
};

export const normalText = Template.bind({});
normalText.args = {
  variant: "normal-text",
  content: ["Mar 03, 2021", "31 day(s) from now"],
  isSelected: false,
};

export const highlightedText = Template.bind({});
highlightedText.args = {
  variant: "highlighted-text",
  content: ["$156,250.05"],
  isSelected: false,
};

export const checkbox = Template.bind({});
checkbox.args = {
  variant: "check-box",
  content: [],
  isSelected: false,
  isHeader: false,
};
