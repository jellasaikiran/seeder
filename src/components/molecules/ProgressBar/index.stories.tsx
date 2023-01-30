import { ComponentStory } from "@storybook/react";
import { ProgressBar } from ".";

export default {
  title: "molecules/ProgressBar",
  component: ProgressBar,
};

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const CircularProgress = Template.bind({});
CircularProgress.args = {
    value: 60
}
