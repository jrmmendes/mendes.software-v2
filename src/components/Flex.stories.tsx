import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'
import { styled } from '../styles/stitches.config'

const Swatch = styled('div', {
  width: 60,
  height: 60,
  borderRadius: '$roundness',
})

const Bar = styled('div', {
  width: '100%',
  height: 40,
  borderRadius: '$roundness',
})

const Container = styled('div', {
  background: '#2a2d2e',
  padding: '1rem',
  borderRadius: '$roundness',
})

const meta = {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    direction: { control: 'radio', options: ['row', 'column'] },
    align: { control: 'select', options: ['center', 'start', 'end', 'stretch'] },
    justify: { control: 'select', options: ['center', 'start', 'end', 'between', 'around'] },
    gap: { control: 'select', options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'] },
    wrap: { control: 'boolean' },
    inline: { control: 'boolean' },
  },
  args: {
    direction: 'row',
    align: 'center',
    justify: 'center',
    gap: 'md',
  },
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Container>
      <Flex {...args}>
        <Swatch css={{ background: '#555' }} />
        <Swatch css={{ background: '#777' }} />
        <Swatch css={{ background: '#999' }} />
      </Flex>
    </Container>
  ),
}

export const Column: Story = {
  args: { direction: 'column' },
  render: (args) => (
    <Container>
      <Flex {...args}>
        <Bar css={{ background: '#555' }} />
        <Bar css={{ background: '#777' }} />
        <Bar css={{ background: '#999' }} />
      </Flex>
    </Container>
  ),
}

export const Wrap: Story = {
  args: { wrap: true, gap: 'sm' },
  render: (args) => (
    <Container css={{ maxWidth: 200 }}>
      <Flex {...args}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Swatch key={i} css={{ width: 50, height: 50, background: `hsl(${i * 45}, 30%, 50%)` }} />
        ))}
      </Flex>
    </Container>
  ),
}
