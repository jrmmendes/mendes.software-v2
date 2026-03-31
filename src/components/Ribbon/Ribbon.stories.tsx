import type { Meta, StoryObj } from '@storybook/react'
import { RibbonWrapper, RibbonLink } from './Ribbon'

const meta = {
  title: 'Components/Ribbon',
  component: RibbonWrapper,
} satisfies Meta<typeof RibbonWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ position: 'relative', width: 300, height: 200, background: '#1c1f20', borderRadius: '0.45rem', overflow: 'hidden' }}>
      <RibbonWrapper>
        <RibbonLink
          href="https://github.com/jrmmendes/mendes.software-v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fork-me on github
        </RibbonLink>
      </RibbonWrapper>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#fff' }}>
        Card preview
      </div>
    </div>
  ),
}
