import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { Link } from './Link'
import { renderWithRouter } from '@/infra/test/testUtils'

describe('Link', () => {
  it('renders external link when href is provided', () => {
    const { container } = renderWithRouter(<Link href="https://example.com">ext</Link>)

    return screen.findByText('ext').then(() => {
      expect(screen.getByText('ext')).toBeInTheDocument()
      expect(container.querySelector('a')?.getAttribute('href')).toBe('https://example.com')
      expect(container).toMatchSnapshot()
    })
  })

  it('renders router link when to is provided', () => {
    const { container } = renderWithRouter(<Link to="/">int</Link>)

    return screen.findByText('int').then(() => {
      expect(screen.getByText('int')).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })
})
