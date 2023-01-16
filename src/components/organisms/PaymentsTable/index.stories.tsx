import { ComponentStory } from '@storybook/react'
import moment from 'moment'
import { PaymentsTable } from '.'

export default {
  title: 'Organisms/PaymentsTable',
  component: PaymentsTable,
}

const Template: ComponentStory<typeof PaymentsTable> = (args) => (
  <PaymentsTable {...args} />
)

export const UpcomingPaymentsTable = Template.bind({})
UpcomingPaymentsTable.args = {
  amount: [170454.55, 63045.54],
  cashKickDate: [moment().format('MMM DD, YYYY'), 'Jan 10, 2023'],
}
