import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Box } from './Box'

describe('Box', () => {
  it('renders', () => {
    const { container } = render(
      <Box>
        <span>content</span>
      </Box>,
    )

    expect(container).toMatchSnapshot()
  })
})
