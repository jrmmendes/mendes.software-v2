import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { BackArrow, BackLink } from './BackLink'
import { renderWithRouter } from '@/infra/test/testUtils'

describe('BackLink', () => {
  it('renders', () => {
    const { container } = renderWithRouter(
      <BackLink to="/">
        <BackArrow />
        back
      </BackLink>,
    )

    return screen.findByText('back').then(() => {
      expect(screen.getByText('back')).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })
})
