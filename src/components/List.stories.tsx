import type { Meta, StoryObj } from '@storybook/react'
import { List, ListItem } from './List'
import { Link } from './Link'

const meta = {
  title: 'Components/List',
  component: List,
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Inline: Story = {
  render: () => (
    <List inline>
      <ListItem spacing="link">
        <Link href="#" variant="hoverable">Github</Link>
      </ListItem>
      <ListItem spacing="link">
        <Link href="#" variant="hoverable">Linkedin</Link>
      </ListItem>
      <ListItem spacing="link">
        <Link href="#" variant="hoverable">DEV</Link>
      </ListItem>
    </List>
  ),
}

export const Details: Story = {
  render: () => (
    <List details>
      <ListItem spacing="detail">First detail item with some content about the project.</ListItem>
      <ListItem spacing="detail">Second detail item with a <a href="#" style={{ color: 'inherit' }}>link</a> inside.</ListItem>
      <ListItem spacing="detail">Third detail item describing another aspect.</ListItem>
    </List>
  ),
}
