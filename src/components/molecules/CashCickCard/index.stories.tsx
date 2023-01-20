import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CashKickCard } from '.'


export default {
  title: 'Molecules/CashKickCard',
  component: CashKickCard,
} as ComponentMeta<typeof CashKickCard>

const Template: ComponentStory<typeof CashKickCard> = (args) => (
    <Box width="28%"><CashKickCard {...args} /></Box>
)

export const NewCashKickCard = Template.bind({})
NewCashKickCard.args = {
    balanceAmount: '$880,000.00',
    handleClick: () => (console.log("clicked"))
}
