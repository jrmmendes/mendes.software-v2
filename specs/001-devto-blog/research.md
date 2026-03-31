# Research: dotmendes Blog UI

## Decision: DEV.to API Integration

**Rationale**: The DEV.to public API provides a straightforward REST endpoint to fetch articles by username. The endpoint `GET https://dev.to/api/articles?username=dotmendes` returns a JSON array of articles with all necessary fields (title, description, published_at, tags, body_html, body_markdown, slug, id, etc.). No authentication is required for reading public articles.

**Alternatives considered**:
- RSS feed parsing — less structured, harder to get full content
- DEV.to GraphQL API — more complex, unnecessary for simple read operations
- Web scraping — fragile, against ToS

### DEV.to API Details

- **Endpoint**: `GET https://dev.to/api/articles?username=dotmendes`
- **Pagination**: Supports `page` and `per_page` query params (max 1000 per page)
- **Rate limit**: 30 requests/minute for unauthenticated, 1000/minute with API key
- **Key fields per article**: `id`, `title`, `description`, `published_at`, `slug`, `tags`, `reading_time_minutes`, `body_html`, `body_markdown`, `cover_image`, `user` (nested author info)
- **Content format**: Both `body_html` and `body_markdown` are available; `body_html` is preferred for direct rendering

## Decision: HTML Content Rendering

**Rationale**: DEV.to provides `body_html` which can be rendered directly. However, raw HTML injection requires sanitization to prevent XSS. A lightweight HTML sanitizer (DOMPurify) should be used before rendering with `dangerouslySetInnerHTML`.

**Alternatives considered**:
- Markdown rendering from `body_markdown` — requires a markdown parser, more complex
- iframe embedding — breaks styling consistency, poor UX
- Raw `dangerouslySetInnerHTML` without sanitization — security risk

### Sanitization Approach

Use DOMPurify (lightweight, well-maintained) to sanitize `body_html` before rendering. Configure to allow standard HTML elements used by DEV.to (headings, paragraphs, code blocks, pre, images, links, lists, tables).

## Decision: Content Provider Abstraction

**Rationale**: To support future provider swaps (leaflet, custom backend), define a TypeScript interface `BlogProvider` with methods `getPosts()` and `getPost(id)`. The DEV.to implementation satisfies this interface. Pages consume only the interface, not the implementation.

**Alternatives considered**:
- Hardcoded DEV.to calls in components — makes future migration painful
- Full repository pattern — overkill for a single-entity read-only feature
- Environment-based conditional logic — harder to test and extend

### Provider Interface

```typescript
interface BlogPost {
  id: string
  title: string
  content: string  // sanitized HTML
  publishedAt: Date
  readingTimeMinutes: number
  tags: string[]
  coverImage?: string
}

interface BlogProvider {
  getPosts(): Promise<BlogPost[]>
  getPost(id: string): Promise<BlogPost | null>
}
```

## Decision: Post ID Routing

**Rationale**: Use the DEV.to article `id` (numeric) as the route parameter for `/blog/:id`. This is stable, unique, and directly maps to the API. The slug could be used for SEO-friendly URLs (`/blog/:slug`), but numeric IDs are simpler and sufficient for a personal blog.

**Alternatives considered**:
- Slug-based URLs (`/blog/my-post-title`) — more SEO-friendly but requires slug-to-ID mapping
- Internal auto-increment IDs — adds unnecessary indirection layer

## Decision: Caching Strategy

**Rationale**: For a personal blog with infrequent updates, simple in-memory caching at the service level is sufficient. Cache posts for the duration of the session. No need for localStorage or service worker caching at this scope.

**Alternatives considered**:
- localStorage persistence — persists across sessions but adds complexity
- React Query / SWR — excellent for caching but adds a new dependency
- No caching — acceptable for low traffic but wasteful on navigation
