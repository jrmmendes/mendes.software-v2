# Quickstart: dotmendes Blog UI

## Prerequisites

- Node.js version matching `.node-version`
- npm installed
- Project dependencies installed (`npm install`)

## Development Steps

### 1. Create the BlogProvider interface and DEV.to implementation

```bash
# Create service directory
mkdir -p src/infra/services/devto
```

Define the `BlogProvider` interface and `BlogPost` types in `src/infra/services/devto/types.ts`. Implement the DEV.to API client in `src/infra/services/devto/client.ts`.

### 2. Create UI components

```bash
mkdir -p src/application/components/PostCard
mkdir -p src/application/components/PostList
```

- `PostCard`: Card component showing post title, date, and preview. Follows existing Card/Stitches patterns.
- `PostList`: Container that renders a list of PostCard components.

### 3. Create page components

```bash
mkdir -p src/application/pages/BlogPage
mkdir -p src/application/pages/BlogPostPage
```

- `BlogPage`: Listing page at `/blog`. Uses ScrollableCard + PostList. Fetches posts on mount.
- `BlogPostPage`: Detail page at `/blog/:id`. Uses ScrollableCard. Fetches single post, renders sanitized HTML content.

### 4. Add routes

Create route files following TanStack Router file-based conventions:

- `src/infra/routes/blog.tsx` → `/blog`
- `src/infra/routes/blog.$id.tsx` → `/blog/:id`

### 5. Add Blog link to homepage

Update `src/application/pages/HomePage/HomePage.tsx` to include a "Blog" link in the navigation list pointing to `/blog`.

### 6. Write tests

Colocate tests with components:

- `src/application/components/PostCard/PostCard.test.tsx`
- `src/application/components/PostList/PostList.test.tsx`
- `src/application/pages/BlogPage/BlogPage.test.tsx`
- `src/application/pages/BlogPostPage/BlogPostPage.test.tsx`
- `src/infra/services/devto/client.test.ts`

### 7. Write Storybook stories

- `src/application/components/PostCard/PostCard.stories.tsx`
- `src/application/components/PostList/PostList.stories.tsx`

## Verification

```bash
# Type check
npx tsc --noEmit

# Run tests
npm run test

# Build
npm run build

# Verify Storybook
npm run storybook
```

## Running

```bash
npm run dev
```

Navigate to `http://localhost:5173/blog` to see the blog listing page.
