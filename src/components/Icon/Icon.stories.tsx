import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'xxl', 'logo'] },
  },
  args: {
    className: 'icon icon-jm-logo',
    size: 'md',
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', gap: '1rem', padding: '1rem' }}>
      <Icon className="icon icon-jm-logo" size="sm" />
      <Icon className="icon icon-jm-logo" size="md" />
      <Icon className="icon icon-jm-logo" size="lg" />
      <Icon className="icon icon-jm-logo" size="xl" />
      <Icon className="icon icon-jm-logo" size="xxl" />
    </div>
  ),
}

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '1rem' }}>
      {['thumbs-up', 'thumbs-down', 'link', 'jm-logo', 'down-open', 'heart', 'heart-empty', 'mail', 'bookmark', 'bookmark-empty', 'code', 'thumbs-up-alt', 'thumbs-down-alt'].map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <Icon className={`icon icon-${name}`} size="xl" />
          <span style={{ fontSize: '0.7rem', color: '#bbb' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
}
