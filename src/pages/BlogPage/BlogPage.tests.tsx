import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, waitFor, cleanup } from '@testing-library/react'
import { BlogPage } from './BlogPage'
import { renderWithRouter, testQueryClient } from '@/shared/test/testUtils'
import { fetchPosts } from '@/entities/Post/api'
import type { BlogPost } from '@/entities/Post/model'

vi.mock('@/entities/Post/api', () => ({
  fetchPosts: vi.fn(),
}))

const mockedFetchPosts = vi.mocked(fetchPosts)

describe('BlogPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    testQueryClient.clear()
  })

  afterEach(() => {
    cleanup()
  })

  it('shows loading state initially', async () => {
    mockedFetchPosts.mockReturnValue(new Promise(() => {}))
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
    mockedFetchPosts.mockResolvedValue(mockPosts)
    renderWithRouter(<BlogPage />)
    expect(await screen.findByText('Test Post')).toBeInTheDocument()
  })

  it('displays error message on failure', async () => {
    mockedFetchPosts.mockRejectedValue(new Error('Network error'))
    renderWithRouter(<BlogPage />)
    expect(await screen.findByText(/Error: Network error/)).toBeInTheDocument()
  })

  it('displays empty state when no posts', async () => {
    mockedFetchPosts.mockResolvedValue([])
    renderWithRouter(<BlogPage />)
    expect(await screen.findByText('No posts available yet.')).toBeInTheDocument()
  })
})