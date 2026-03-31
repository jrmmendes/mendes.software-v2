import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { List, ListItem } from './List'

describe('List', () => {
  it('renders items', () => {
    const { container, getByText } = render(
      <List>
        <ListItem>one</ListItem>
        <ListItem>two</ListItem>
      </List>,
    )

    expect(getByText('one')).toBeInTheDocument()
    expect(getByText('two')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
