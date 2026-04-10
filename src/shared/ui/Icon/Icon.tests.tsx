import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders with className', () => {
    const { container } = render(<Icon className="icon-test" />)

    expect(container.querySelector('.icon-test')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
