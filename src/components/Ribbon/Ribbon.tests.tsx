import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { RibbonLink, RibbonWrapper } from './Ribbon'

describe('Ribbon', () => {
  it('renders wrapper and link', () => {
    const { container, getByText } = render(
      <RibbonWrapper>
        <RibbonLink href="#">link</RibbonLink>
      </RibbonWrapper>,
    )

    expect(getByText('link')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
