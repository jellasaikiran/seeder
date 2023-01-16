import { ThemeProvider } from '@emotion/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Chip from './index'
import { theme } from '../../../theme/theme'

export default {
  title: 'Atoms/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const payment = Template.bind({})
payment.args = {
  variant: 'payment',
  content: 'Due in 30 day(s)',
}

export const tablecell = Template.bind({})
tablecell.args = {
  variant: 'tablecell',
  content: 'Upcoming',
}

export const loading = Template.bind({})
loading.args = {
  variant: 'loading',
  content: '',
}
