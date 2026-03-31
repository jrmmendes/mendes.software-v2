import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Flex } from './Flex'

describe('Flex', () => {
  it('renders with children', () => {
    const { container, getByText } = render(
      <Flex direction="column">
        <span>child</span>
      </Flex>,
    )

    expect(getByText('child')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
