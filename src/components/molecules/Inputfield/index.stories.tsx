import { ComponentStory } from '@storybook/react'
import InputField from '.'

export default {
  title: 'molecules/InputField',
  component: InputField,
}

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
)


export const CashKickInput = Template.bind({})
CashKickInput.args = {
  placeHolder: "Ex: marketing expenses"
}
