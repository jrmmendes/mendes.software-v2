# Contract: BlogProvider Interface

## Overview

The `BlogProvider` interface defines the contract between the application UI layer and any content provider implementation. This abstraction allows swapping data sources (DEV.to, leaflet, custom backend) without UI changes.

## Interface Definition

```typescript
interface BlogProvider {
  /**
   * Fetches all blog posts for the configured author.
   * Returns posts sorted by publication date (newest first).
   */
  getPosts(): Promise<BlogPost[]>

  /**
   * Fetches a single blog post by its ID.
   * Returns null if the post is not found.
   */
  getPost(id: string): Promise<BlogPost | null>
}
```

## Data Types

### BlogPost

```typescript
interface BlogPost {
  /** Unique identifier from the provider */
  id: string

  /** Article title */
  title: string

  /** Sanitized HTML content ready for rendering */
  content: string

  /** Publication timestamp */
  publishedAt: Date

  /** Estimated reading time in minutes */
  readingTimeMinutes: number

  /** Topic labels for categorization */
  tags: string[]

  /** URL to the article cover/featured image (optional) */
  coverImage?: string

  /** Short preview/excerpt text (optional) */
  description?: string
}
```

## Error Contract

All provider methods MUST reject with a typed error:

```typescript
interface ProviderError {
  /** Error category */
  type: 'network' | 'not_found' | 'parse' | 'rate_limit' | 'unknown'

  /** Human-readable message */
  message: string

  /** Original error (for logging) */
  cause?: Error
}
```

## Implementation: DEV.to Provider

### Configuration

```typescript
interface DevToConfig {
  /** DEV.to username (e.g., "dotmendes") */
  username: string

  /** Optional API key for higher rate limits */
  apiKey?: string
}
```

### API Mapping

| Interface Method | DEV.to Endpoint | Notes |
|-----------------|-----------------|-------|
| `getPosts()` | `GET /api/articles?username={username}&page=1&per_page=1000` | Maps response fields to `BlogPost` |
| `getPost(id)` | `GET /api/articles/{id}` | Maps response fields to `BlogPost` |

### Field Mapping (DEV.to API → BlogPost)

| DEV.to Field | BlogPost Field | Transformation |
|-------------|----------------|----------------|
| `id` | `id` | Convert to string |
| `title` | `title` | Direct |
| `body_html` | `content` | Sanitize with DOMPurify |
| `published_at` | `publishedAt` | Parse ISO string to Date |
| `reading_time_minutes` | `readingTimeMinutes` | Direct |
| `tags` | `tags` | Direct (array of strings) |
| `cover_image` | `coverImage` | Direct (may be null) |
| `description` | `description` | Direct (may be null) |
