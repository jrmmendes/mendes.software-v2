import type { Meta, StoryObj } from '@storybook/react'
import { PostCard } from './PostCard'

const meta: Meta<typeof PostCard> = {
  component: PostCard,
  title: 'Components/PostCard',
}

export default meta
type Story = StoryObj<typeof PostCard>

export const Default: Story = {
  args: {
    url: 'https://dev.to/dotmendes/building-blog-react-devto',
    title: 'Building a Blog with React and DEV.to API',
    description: 'A walkthrough of creating a personal blog that consumes the DEV.to public API.',
    publishedAt: new Date('2024-06-15T10:00:00Z'),
    readingTimeMinutes: 8,
    tags: ['react', 'typescript', 'devto'],
  },
}

export const WithoutDescription: Story = {
  args: {
    url: 'https://dev.to/dotmendes/quick-thoughts-architecture',
    title: 'Quick Thoughts on Software Architecture',
    publishedAt: new Date('2024-07-20T14:30:00Z'),
    readingTimeMinutes: 3,
    tags: ['architecture'],
  },
}

export const WithManyTags: Story = {
  args: {
    url: 'https://dev.to/dotmendes/testing-react-apps',
    title: 'Comprehensive Guide to Testing React Applications',
    description: 'Everything you need to know about testing React components, hooks, and integration tests.',
    publishedAt: new Date('2024-08-01T09:00:00Z'),
    readingTimeMinutes: 15,
    tags: ['react', 'testing', 'typescript', 'vitest', 'jest', 'cypress'],
  },
}
