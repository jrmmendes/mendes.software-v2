import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  it('renders', () => {
    const { container, getByText } = render(<Card>hello</Card>)

    expect(getByText('hello')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
