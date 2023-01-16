import React from 'react'
import { ComponentStory } from '@storybook/react'
import CheckboxComponent from '.'

export default {
  title: 'Atoms/Checkbox',
  component: CheckboxComponent,
}

const Template: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
