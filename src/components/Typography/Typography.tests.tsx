import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Typography } from './Typography'

describe('Typography', () => {
  it('renders with variant', () => {
    const { container, getByText } = render(<Typography variant="h1">Title</Typography>)

    expect(getByText('Title')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
