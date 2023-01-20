import { ComponentMeta, ComponentStory } from '@storybook/react'
import SideMenu from '.'

export default {
  title: 'organisms/Menu',
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>

const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu />

export const sideMenu = Template.bind({})
