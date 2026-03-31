import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createDevToClient } from './client'
import { cache } from './cache'

const mockArticleListItem = {
  type_of: 'article',
  id: 456,
  title: 'List Article',
  description: 'A list article',
  published_at: '2024-02-15T10:00:00Z',
  slug: 'list-article',
  tag_list: ['javascript'],
  reading_time_minutes: 3,
  cover_image: null,
  url: 'https://dev.to/dotmendes/list-article',
  user: {
    name: 'Test User',
    username: 'dotmendes',
    profile_image: 'https://example.com/avatar.jpg',
    bio: 'Test bio',
  },
}

describe('createDevToClient', () => {
  beforeEach(() => {
    cache.clear()
    vi.restoreAllMocks()
  })

  describe('getPosts', () => {
    it('returns sorted posts by publication date (newest first)', async () => {
      const articles = [
        { ...mockArticleListItem, id: 1, published_at: '2024-01-01T00:00:00Z' },
        { ...mockArticleListItem, id: 2, published_at: '2024-06-01T00:00:00Z' },
        { ...mockArticleListItem, id: 3, published_at: '2024-03-01T00:00:00Z' },
      ]

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(articles),
      })

      const client = createDevToClient({ username: 'dotmendes' })
      const posts = await client.getPosts()

      expect(posts).toHaveLength(3)
      expect(posts[0].id).toBe('2')
      expect(posts[1].id).toBe('3')
      expect(posts[2].id).toBe('1')
    })

    it('maps tag_list to tags', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve([{ ...mockArticleListItem, tag_list: ['react', 'typescript'] }]),
      })

      const client = createDevToClient({ username: 'dotmendes' })
      const posts = await client.getPosts()

      expect(posts[0].tags).toEqual(['react', 'typescript'])
    })

    it('maps url field', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve([{ ...mockArticleListItem, url: 'https://dev.to/dotmendes/test' }]),
      })

      const client = createDevToClient({ username: 'dotmendes' })
      const posts = await client.getPosts()

      expect(posts[0].url).toBe('https://dev.to/dotmendes/test')
    })

    it('throws provider error on rate limit (429)', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 429,
      })

      const client = createDevToClient({ username: 'dotmendes' })

      await expect(client.getPosts()).rejects.toMatchObject({
        type: 'rate_limit',
      })
    })

    it('throws provider error on network failure', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      })

      const client = createDevToClient({ username: 'dotmendes' })

      await expect(client.getPosts()).rejects.toMatchObject({
        type: 'network',
      })
    })

    it('uses cached posts on second call', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve([mockArticleListItem]),
      })

      const client = createDevToClient({ username: 'dotmendes' })

      await client.getPosts()
      await client.getPosts()

      expect(global.fetch).toHaveBeenCalledTimes(1)
    })
  })
})
