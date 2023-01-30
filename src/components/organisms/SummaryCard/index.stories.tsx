import { ComponentStory } from "@storybook/react";
import { SummaryCard } from ".";

export default {
  title: "Organisms/SummaryCards",
  component: SummaryCard,
};

const Template: ComponentStory<typeof SummaryCard> = (args) => (
  <SummaryCard {...args} />
);

export const SummaryWithSlider = Template.bind({});
SummaryWithSlider.args = {
  variant: "summary-slider",
  term: 12,
  selectedcontracts: 2,
  paybackamount: 140579,
  rate: 12345,
  payout: 150000,
  sum: 401282,
  value: 201082,
};

export const SummaryReview = Template.bind({});
SummaryReview.args = {
  variant: "summary-review",
  term: 12,
  selectedcontracts: 2,
  paybackamount: 140579,
  rate: 12345,
  payout: 150000,
  sum: 401282,
  value: 201082,
};
