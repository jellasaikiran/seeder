import { ComponentMeta, ComponentStory } from '@storybook/react'
import Slider from './index'

export default {
  title: 'Atoms/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const SummarySlider = Template.bind({})
SummarySlider.args = {
  max: 400000,
}
