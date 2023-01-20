import { color } from '@mui/system'
import { ComponentStory } from '@storybook/react'
import { NavigationItem } from '.'
import home from '../../../../public/icons/home-2.svg'
import homeSelected from '../../../../public/icons/home-1.svg'
import info from '../../../../public/icons/info-circle.svg'
import { theme } from '../../../theme/theme'

export default {
  title: 'molecules/NavigationItem',
  component: NavigationItem,
}

const Template: ComponentStory<typeof NavigationItem> = (args) => (
  <NavigationItem {...args} />
)

export const MenuItem = Template.bind({})
MenuItem.args = {
  variant: 'functional',
  icon: home,
  iconSelected: homeSelected,
  selected: false,
  text: 'Home',
  color: theme.palette.text.disabled,
}

export const TextWithIcon = Template.bind({})
TextWithIcon.args = {
  variant: 'normal',
  icon: info,
  text: 'Cash acceleration',
  color: theme.palette.text.primary,
  textVariant: 'h2',
}
