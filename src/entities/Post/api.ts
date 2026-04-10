import { BlogPost, BlogProvider, ProviderError, DevToConfig, DevToArticleListItem } from './model'

const BASE_URL = 'https://dev.to/api'

class PostCache {
  private posts: BlogPost[] | null = null
  private postMap: Map<string, BlogPost> = new Map()

  setPosts(posts: BlogPost[]): void {
    this.posts = posts
    this.postMap.clear()
    for (const post of posts) {
      this.postMap.set(post.id, post)
    }
  }

  getPosts(): BlogPost[] | null {
    return this.posts
  }

  setPost(post: BlogPost): void {
    this.postMap.set(post.id, post)
    if (this.posts !== null) {
      const idx = this.posts.findIndex((p) => p.id === post.id)
      if (idx >= 0) {
        this.posts[idx] = post
      } else {
        this.posts.push(post)
      }
    }
  }

  getPost(id: string): BlogPost | undefined {
    return this.postMap.get(id)
  }

  clear(): void {
    this.posts = null
    this.postMap.clear()
  }
}

const cache = new PostCache()

function createError(type: ProviderError['type'], message: string, cause?: Error): ProviderError {
  return { type, message, cause }
}

function mapArticle(article: DevToArticleListItem): BlogPost {
  return {
    id: String(article.id),
    title: article.title,
    url: article.url,
    publishedAt: new Date(article.published_at),
    readingTimeMinutes: article.reading_time_minutes,
    tags: article.tag_list,
    coverImage: article.cover_image ?? undefined,
    description: article.description ?? undefined,
  }
}

async function fetchWithConfig(url: string, apiKey?: string): Promise<Response> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (apiKey) {
    headers['api-key'] = apiKey
  }

  const response = await fetch(url, { headers })

  if (!response.ok) {
    if (response.status === 429) {
      throw createError('rate_limit', 'Rate limit exceeded. Please try again later.')
    }
    if (response.status === 404) {
      throw createError('not_found', 'Resource not found.')
    }
    throw createError('network', `Request failed with status ${response.status}`)
  }

  return response
}

export function createDevToClient(config: DevToConfig): BlogProvider {
  const { username, apiKey } = config

  async function getPosts(): Promise<BlogPost[]> {
    const cached = cache.getPosts()
    if (cached !== null) {
      return cached
    }

    try {
      const url = `${BASE_URL}/articles?username=${encodeURIComponent(username)}&page=1&per_page=1000`
      const response = await fetchWithConfig(url, apiKey)
      const data: DevToArticleListItem[] = await response.json()
      const posts = data.map(mapArticle).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      cache.setPosts(posts)
      return posts
    } catch (err) {
      if ((err as ProviderError).type) {
        throw err
      }
      throw createError('parse', 'Failed to parse articles response', err instanceof Error ? err : undefined)
    }
  }

  return { getPosts }
}

export const client = createDevToClient({
  username: 'dotmendes',
})