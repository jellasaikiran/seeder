import { ComponentStory } from '@storybook/react'
import { TableBox } from '.'
import { PaymentsTable } from '../PaymentsTable'

export default {
  title: 'Organisms/TableBox',
  component: TableBox,
}

const Template: ComponentStory<typeof TableBox> = (args) => (
  <TableBox {...args} />
)

export const PaymentsTableBox = Template.bind({})
PaymentsTableBox.args = {
  variant: 'normal',
  text: 'Your payments',
  table: (
    <PaymentsTable
      amount={[170454.55]}
      cashKickDate={['Jan 10, 2023']}
    />
  ),
}