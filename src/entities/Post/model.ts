export interface BlogPost {
  id: string
  title: string
  url: string
  publishedAt: Date
  readingTimeMinutes: number
  tags: string[]
  coverImage?: string
  description?: string
}

export interface BlogProvider {
  getPosts(): Promise<BlogPost[]>
}

export type ProviderErrorType = 'network' | 'not_found' | 'parse' | 'rate_limit' | 'unknown'

export interface ProviderError {
  type: ProviderErrorType
  message: string
  cause?: Error
}

export interface DevToConfig {
  username: string
  apiKey?: string
}

export interface DevToArticleListItem {
  type_of: string
  id: number
  title: string
  description: string | null
  published_at: string
  slug: string
  tag_list: string[]
  reading_time_minutes: number
  cover_image: string | null
  url: string
  user: {
    name: string
    username: string
    profile_image: string
    bio: string | null
  }
}