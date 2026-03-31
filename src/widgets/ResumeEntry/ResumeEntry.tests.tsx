import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { ResumeEntry } from './ResumeEntry'
import { render } from '@testing-library/react'

describe('ResumeEntry', () => {
  it('renders', () => {
    const { container } = render(
      <ResumeEntry
        title="Title"
        role="Role"
        stack="Stack"
        details={['a', 'b']}
      />,
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
