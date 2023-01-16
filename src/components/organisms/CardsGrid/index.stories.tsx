import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardsGrid from './index'

export default {
  title: 'organisms/CardsGrid',
  component: CardsGrid,
} as ComponentMeta<typeof CardsGrid>

const Template: ComponentStory<typeof CardsGrid> = (args) => <CardsGrid />

export const grid = Template.bind({})
