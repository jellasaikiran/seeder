import { ComponentStory } from '@storybook/react'
import Illustration from '.'
import money from '../../../../public/illustrations/Money 3D Illustration 1.png'
import analysis from '../../../../public/illustrations/Business Analysis 3D Illustration.png'

export default {
  title: 'atoms/illustration',
  component: Illustration,
}

const Template: ComponentStory<typeof Illustration> = (args) => (
  <Illustration {...args} />
)

export const MoneyIllustration = Template.bind({})
MoneyIllustration.args = {
  source: money,
  alt: "illustration"
}
