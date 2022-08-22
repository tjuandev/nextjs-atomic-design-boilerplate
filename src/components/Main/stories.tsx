import Main from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>

const PrimaryTemplate: ComponentStory<typeof Main> = (args) => (
  <Main {...args} />
)

export const Primary = PrimaryTemplate.bind({})

Primary.args = {
  title: 'Luana é muito linda!',
  description: 'Ela é a mulher mais perfeita!'
}
