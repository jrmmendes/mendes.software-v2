import type { Meta, StoryObj } from '@storybook/react'
import { BackArrow, BackLink } from './BackLink'

const meta = {
  title: 'Components/BackLink',
  component: BackLink,
} satisfies Meta<typeof BackLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/',
    children: (
      <>
        <BackArrow />
        Voltar
      </>
    ),
  },
}

export const ArrowOnly: Story = {
  render: () => <BackArrow />,
}
