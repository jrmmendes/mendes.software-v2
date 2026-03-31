import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import { BlogPage } from './BlogPage'
import { renderWithRouter } from '@/infra/test/testUtils'
import { client } from '@/infra/services/devto/client'
import type { BlogPost } from '@/infra/services/devto/types'

vi.mock('@/infra/services/devto/client', () => ({
  client: {
    getPosts: vi.fn(),
  },
}))

describe('BlogPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows loading state initially', async () => {
    vi.mocked(client.getPosts).mockReturnValue(new Promise(() => {}))
    renderWithRouter(<BlogPage />)
    await waitFor(() => {
      expect(screen.getByText('Loading posts...')).toBeInTheDocument()
    })
  })

  it('displays posts when loaded', async () => {
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Test Post',
        url: 'https://dev.to/dotmendes/test-post',
        publishedAt: new Date('2024-01-01'),
        readingTimeMinutes: 5,
        tags: ['test'],
        description: 'A test post',
      },
    ]
    vi.mocked(client.getPosts).mockResolvedValue(mockPosts)
    renderWithRouter(<BlogPage />)
    expect(await screen.findByText('Test Post')).toBeInTheDocument()
  })

  it('displays error message on failure', async () => {
    vi.mocked(client.getPosts).mockRejectedValue(new Error('Network error'))
    renderWithRouter(<BlogPage />)
    expect(await screen.findByText(/Error: Network error/)).toBeInTheDocument()
  })

  it('displays empty state when no posts', async () => {
    vi.mocked(client.getPosts).mockResolvedValue([])
    renderWithRouter(<BlogPage />)
    expect(await screen.findByText('No posts available yet.')).toBeInTheDocument()
  })
})
