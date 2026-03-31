import type { Meta, StoryObj } from '@storybook/react'
import { ResumePage } from './ResumePage'

const meta = {
  title: 'Pages/ResumePage',
  component: ResumePage,
} satisfies Meta<typeof ResumePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
