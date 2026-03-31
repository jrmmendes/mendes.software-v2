import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { ToolsPage } from './ToolsPage'
import { renderWithRouter } from '@/infra/test/testUtils'

describe('ToolsPage', () => {
  it('renders', () => {
    const { container } = renderWithRouter(<ToolsPage />)

    return screen.findByText('Test').then(() => {
      expect(screen.getByText('Test')).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })
})
