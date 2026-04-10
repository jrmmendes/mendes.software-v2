import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { ScrollableCard } from './ScrollableCard'

describe('ScrollableCard', () => {
  it('renders', () => {
    const { container, getByText } = render(<ScrollableCard>content</ScrollableCard>)

    expect(getByText('content')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
