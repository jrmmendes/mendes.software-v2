import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { ResumePage } from './ResumePage'
import { renderWithRouter } from '@/infra/test/testUtils'

describe('ResumePage', () => {
  it('renders', () => {
    const { container } = renderWithRouter(<ResumePage />)

    return screen.findByText('Experiência').then(() => {
      expect(screen.getByText('Experiência')).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })
})
