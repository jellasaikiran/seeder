import { ComponentStory } from '@storybook/react'
import { Banner } from '.'

export default {
  title: 'molecules/Banner',
  component: Banner,
}

const Template: ComponentStory<typeof Banner> = () => (
  <Banner/>
)

export const HomePageBanner = Template.bind({})