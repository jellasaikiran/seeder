import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory, Story } from '@storybook/react'
import ButtonComponent from '.'

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ['outlined', 'text', 'contained'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <Box><ButtonComponent sx={{textTransform:'none', width:'434px', height:'60px'}} {...args} /></Box>
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'contained',
  label: 'Continue',
  textColor:'#E8E8E9',
  textVariant:'h6',
  onClick: () => window.alert('Hello!!'),
}