import { ComponentStory } from '@storybook/react'
import { SubmitModal } from '.'


export default {
  title: 'organisms/Modal',
  component: SubmitModal,
}

const Template: ComponentStory<typeof SubmitModal> = (args) => (
  <SubmitModal {...args} />
)

export const CashKickModal = Template.bind({})
CashKickModal.args = {
    input: "",
    open: true,
    disabled: true,
    handleClose: () => ({}),
    handleInputBox: () => ({}),
    handleSubmit: () => {},
}
