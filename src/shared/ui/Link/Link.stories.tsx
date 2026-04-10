import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    variant: { control: 'select', options: ['default', 'hoverable', 'detail'] },
  },
  args: {
    href: '#',
    children: 'Click me',
    variant: 'default',
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
      <Link href="#">Default — inherits color</Link>
      <Link href="#" variant="hoverable">Hoverable — grows on hover</Link>
      <Link href="#" variant="detail">Detail — white, grays on hover</Link>
    </div>
  ),
}
