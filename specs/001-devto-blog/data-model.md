# Data Model: dotmendes Blog UI

## Entities

### BlogPost

Represents a single blog article from the content provider.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier from the provider (numeric string for DEV.to) |
| `title` | `string` | Yes | Article title |
| `content` | `string` | Yes | Sanitized HTML content ready for rendering |
| `publishedAt` | `Date` | Yes | Publication timestamp |
| `readingTimeMinutes` | `number` | Yes | Estimated reading time in minutes |
| `tags` | `string[]` | Yes | Topic labels for categorization |
| `coverImage` | `string` | No | URL to the article cover/featured image |
| `description` | `string` | No | Short preview/excerpt text |

### Author

Represents the blog author (dotmendes).

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | Yes | Display name |
| `username` | `string` | Yes | Platform username (e.g., "dotmendes") |
| `bio` | `string` | No | Short author biography |
| `profileImage` | `string` | No | URL to profile/avatar image |
| `socialLinks` | `{ label: string, url: string }[]` | No | External profile links |

## Relationships

- **Author** (1) → **BlogPost** (many): One author has many posts
- **BlogPost** references **Author** indirectly (provider returns author info with each post)

## Validation Rules

- `BlogPost.id` must be a non-empty string
- `BlogPost.title` must be a non-empty string
- `BlogPost.content` must be valid sanitized HTML
- `BlogPost.publishedAt` must be a valid Date
- `BlogPost.readingTimeMinutes` must be a positive integer
- `BlogPost.tags` must be an array (may be empty)

## State Transitions

This is a read-only feature with no state mutations. Posts flow through:

1. **Fetching** → Loading state displayed
2. **Loaded** → Posts rendered in list or detail view
3. **Error** → Error message displayed if fetch fails
4. **Cached** → Subsequent reads served from in-memory cache
