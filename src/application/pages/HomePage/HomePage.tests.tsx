import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { HomePage } from './HomePage'
import { renderWithRouter } from '@/infra/test/testUtils'

describe('HomePage', () => {
  it('renders', () => {
    const { container } = renderWithRouter(<HomePage />)

    return screen.findByText('Junior Mendes').then(() => {
      expect(screen.getByText('Junior Mendes')).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })
})
