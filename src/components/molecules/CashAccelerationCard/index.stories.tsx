import { ThemeProvider } from '@emotion/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CashAccelerationCard from './index'

export default {
  title: 'Molecules/CashAccelerationCard',
  component: CashAccelerationCard,
} as ComponentMeta<typeof CashAccelerationCard>

const Template: ComponentStory<typeof CashAccelerationCard> = (args) => (
  <CashAccelerationCard {...args} />
)

export const termCapital = Template.bind({})
termCapital.args = {
  icon: '/static/media/public/icons/calendar.svg',
  title: 'Term cap',
  content: '12 Months',
}

export const availableCredit = Template.bind({})
availableCredit.args = {
  icon: '/static/media/public/icons/document-download.svg',
  title: 'Available credit',
  content: '$880.0k',
}

export const maxInterestRate = Template.bind({})
maxInterestRate.args = {
  icon: '/static/media/public/icons/percentage-square.svg',
  title: 'Max interest rate',
  content: '12.00%',
}
