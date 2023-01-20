import { Home } from "@mui/icons-material";
import { ComponentStory } from "@storybook/react";
import { HomeCardGrid } from ".";

export default{
    title: 'organisms/HomeCardGrid',
    component: HomeCardGrid
}

const Template: ComponentStory<typeof HomeCardGrid> = (args) => (
    <HomeCardGrid {...args}/>
)

export const HomeCards = Template.bind({})
HomeCards.args = {
    dueDate:'14 may 2002',
    dueAmount: 140023,
    daysCount: 30,
    outstanding: 3010765,
    progressValue: 50
}