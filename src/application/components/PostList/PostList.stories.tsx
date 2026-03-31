import type { Meta, StoryObj } from '@storybook/react'
import { PostList } from './PostList'
import type { BlogPost } from '@/infra/services/devto/types'

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with TypeScript',
    url: 'https://dev.to/dotmendes/getting-started-typescript',
    publishedAt: new Date('2024-06-01'),
    readingTimeMinutes: 5,
    tags: ['typescript'],
    description: 'A beginner guide to TypeScript',
  },
  {
    id: '2',
    title: 'React Hooks Deep Dive',
    url: 'https://dev.to/dotmendes/react-hooks-deep-dive',
    publishedAt: new Date('2024-07-15'),
    readingTimeMinutes: 10,
    tags: ['react', 'hooks'],
    description: 'Understanding React hooks in depth',
  },
  {
    id: '3',
    title: 'Testing Best Practices',
    url: 'https://dev.to/dotmendes/testing-best-practices',
    publishedAt: new Date('2024-08-20'),
    readingTimeMinutes: 7,
    tags: ['testing', 'vitest'],
  },
]

const meta: Meta<typeof PostList> = {
  component: PostList,
  title: 'Components/PostList',
}

export default meta
type Story = StoryObj<typeof PostList>

export const Default: Story = {
  args: {
    posts: mockPosts,
  },
}

export const SinglePost: Story = {
  args: {
    posts: [mockPosts[0]],
  },
}

export const Empty: Story = {
  args: {
    posts: [],
  },
}
