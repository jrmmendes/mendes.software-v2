import { describe, it, expect } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import { PostList } from './PostList'
import { renderWithRouter } from '@/shared/test/testUtils'
import { BlogPost } from "@/entities/Post/model.ts";

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'First Post',
    url: 'https://dev.to/dotmendes/first-post',
    publishedAt: new Date('2024-06-01'),
    readingTimeMinutes: 3,
    tags: ['react'],
    description: 'Description 1',
  },
  {
    id: '2',
    title: 'Second Post',
    url: 'https://dev.to/dotmendes/second-post',
    publishedAt: new Date('2024-07-01'),
    readingTimeMinutes: 5,
    tags: ['typescript'],
    description: 'Description 2',
  },
]

describe('PostList', () => {
  it('renders all posts', async () => {
    renderWithRouter(<PostList posts={mockPosts} />)
    await waitFor(() => {
      expect(screen.getByText('First Post')).toBeInTheDocument()
    })
    expect(screen.getByText('Second Post')).toBeInTheDocument()
  })

  it('renders nothing when posts array is empty', async () => {
    const { container } = renderWithRouter(<PostList posts={[]} />)
    await waitFor(() => {
      expect(container.firstChild).toBeNull()
    })
  })
})
