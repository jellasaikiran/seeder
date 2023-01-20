import { ComponentStory } from '@storybook/react'
import moment from 'moment'
import Header from '.'

export default {
    title: 'Organisms/Header',
    component: Header,
  }
  
  const Template: ComponentStory<typeof Header> = (args) => (
    <Header {...args} />
  )
  
  export const LandingPageHeader = Template.bind({})
  LandingPageHeader.args = {
    title:'Good afternoon',
    subtitle:moment().format("MMMM Do, YYYY"),
    width:100
  }

  export const CashAccelerationHeader = Template.bind({})
  CashAccelerationHeader.args = {
    title:'Cash acceleration',
    subtitle:'Place to create new cash kicks to run your business',
    width:100
  }

  export const CashKickHeader = Template.bind({})
  CashKickHeader.args = {
    title:'New cash kick',
    subtitle:'Let’s setup a new cash kick to power your Saas',
    width:100
  }