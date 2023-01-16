import { ComponentStory } from '@storybook/react'
import avatar from '../../../../public/logo/Rectangle_554.png'
import { AvatarComponent } from '.'

export default {
  title: 'atoms/Avatar',
  component: AvatarComponent,
}

const Template: ComponentStory<typeof AvatarComponent> = (args) => (
  <AvatarComponent {...args} />
)

export const HomeAvatar = Template.bind({})
HomeAvatar.args = {
  source: avatar,
  alt: "avatar",
  variant: "rounded"
}
