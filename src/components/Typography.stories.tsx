import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'body'],
    },
    color: {
      control: 'select',
      options: ['primary', 'light', 'gray2', 'mailGray'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'md', 'lg', 'xl', 'xxl'],
    },
    italic: { control: 'boolean' },
    marginTop: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    children: 'Junior Mendes',
    variant: 'body',
    color: 'light',
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">Heading 1 — Junior Mendes</Typography>
      <Typography variant="h2">Heading 2 — Força de Vendas</Typography>
      <Typography variant="h3">Heading 3 — 2021 – Atualmente</Typography>
      <Typography variant="body">Body text — Colaboração no desenvolvimento dos aplicativos.</Typography>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Typography color="light">Light — default text color</Typography>
      <Typography color="gray2">Gray2 — secondary text</Typography>
      <Typography color="mailGray">MailGray — muted text</Typography>
      <Typography color="primary" css={{ background: '#fff', padding: '0.5rem' }}>Primary — dark text on light bg</Typography>
    </div>
  ),
}

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Typography weight="light">Light (300) — thin text</Typography>
      <Typography weight="normal">Normal (400) — regular text</Typography>
      <Typography weight="medium">Medium (500) — semi-bold text</Typography>
    </div>
  ),
}

export const Italic: Story = {
  args: {
    italic: true,
    children: 'Italic text example',
  },
}

export const MarginTop: Story = {
  render: () => (
    <div>
      <Typography>Preceding text</Typography>
      <Typography marginTop="sm">Small margin top</Typography>
      <Typography marginTop="md">Medium margin top</Typography>
      <Typography marginTop="lg">Large margin top</Typography>
    </div>
  ),
}
