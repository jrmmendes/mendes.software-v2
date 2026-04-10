import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { PageLayout } from './PageLayout'

describe('PageLayout', () => {
  it('renders', () => {
    const { container, getByText } = render(
      <PageLayout>
        <span>page</span>
      </PageLayout>,
    )

    expect(getByText('page')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
