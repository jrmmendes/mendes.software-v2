import { BlogPost, ProviderError, DevToArticleListItem } from './model'

const BASE_URL = 'https://dev.to/api'

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

export async function fetchPosts(username: string = 'dotmendes', apiKey?: string): Promise<BlogPost[]> {
  const url = `${BASE_URL}/articles?username=${encodeURIComponent(username)}&page=1&per_page=1000`
  const response = await fetchWithConfig(url, apiKey)
  const data: DevToArticleListItem[] = await response.json()
  return data.map(mapArticle).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
}