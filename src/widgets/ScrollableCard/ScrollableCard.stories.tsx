import type { Meta, StoryObj } from '@storybook/react'
import { ScrollableCard } from './ScrollableCard'
import { Typography } from '../../components/Typography/Typography'

const meta = {
  title: 'Components/ScrollableCard',
  component: ScrollableCard,
} satisfies Meta<typeof ScrollableCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollableCard>
      <Typography variant="h1">Scrollable Content</Typography>
      <Typography color="gray2" css={{ marginTop: '$md' }}>
        This card scrolls internally while the page stays fixed.
      </Typography>
      {Array.from({ length: 20 }).map((_, i) => (
        <Typography key={i} css={{ marginTop: '$sm' }}>
          Paragraph {i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      ))}
    </ScrollableCard>
  ),
}
