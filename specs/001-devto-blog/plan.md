# Implementation Plan: dotmendes Blog UI

**Branch**: `001-devto-blog` | **Date**: 2026-03-31 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-devto-blog/spec.md`

## Summary

Add a "Blog" section to the mendes.software personal site that displays dotmendes' blog posts fetched from a configurable content provider (initially DEV.to API). The feature introduces two new routes: `/blog` (post listing with cards sorted newest-first) and `/blog/:id` (full post detail page). All UI follows the existing dark-themed, card-based style using Stitches design tokens and existing component patterns (PageLayout, ScrollableCard, Typography, BackLink).

## Technical Context

**Language/Version**: TypeScript 5.5.4  
**Primary Dependencies**: @tanstack/react-router (routing), @stitches/react (styling), fetch API (DEV.to API client)  
**Storage**: N/A (no persistent storage; optional in-memory cache for loaded posts)  
**Testing**: Vitest + Testing Library with jsdom environment  
**Target Platform**: Web browser (SPA deployed on Netlify)  
**Project Type**: Web application (single-page React application)  
**Performance Goals**: Blog listing loads in under 2 seconds on standard broadband  
**Constraints**: Must follow existing Stitches theme tokens, TanStack Router file-based routing pattern, and component-first architecture  
**Scale/Scope**: Single-author blog; ~tens of posts at most; no pagination complexity initially

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Pre-Research Check

| Gate | Status | Notes |
|------|--------|-------|
| I. Component-First Architecture | PASS | New components (PostCard, PostList, BlogPage, BlogPostPage) will be self-contained, independently testable, with Storybook stories |
| II. Layered Separation | PASS | UI in `src/application/pages/`, API client in `src/infra/services/`, route in `src/infra/routes/` |
| III. Test-Driven Development | PASS | Tests written before implementation for all components and services |
| IV. Storybook-Driven Development | PASS | Stories required for PostCard, PostList, and any new reusable components |
| V. Strict Type Safety | PASS | All types defined, no `any`, uses `@/*` path alias, `tsc` must pass |
| Technology Stack Compliance | PASS | React 18 functional components, Stitches styling, TanStack Router, Vite build |
| Code Organization | PASS | Components in `src/application/components/`, pages in `src/application/pages/`, routes in `src/infra/routes/` |

### Post-Design Re-evaluation

| Gate | Status | Notes |
|------|--------|-------|
| I. Component-First Architecture | PASS | PostCard and PostList components defined with stories; pages use existing PageLayout/Card patterns |
| II. Layered Separation | PASS | `src/infra/services/devto/` contains only API client and types; no business logic in UI; no UI in infra |
| III. Test-Driven Development | PASS | Test files planned for all components and services (colocated `.test.tsx`/`.test.ts`) |
| IV. Storybook-Driven Development | PASS | Stories defined for PostCard and PostList in plan structure |
| V. Strict Type Safety | PASS | `BlogPost`, `BlogProvider`, `ProviderError` interfaces fully typed; no `any` usage |
| Technology Stack Compliance | PASS | Uses existing React 18, Stitches, TanStack Router, Vite; adds DOMPurify for sanitization |
| Code Organization | PASS | Follows established directory structure; new `services/` directory justified in Complexity Tracking |

## Project Structure

### Documentation (this feature)

```text
specs/001-devto-blog/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (DEV.to API contract)
└── tasks.md             # Phase 2 output (not created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── application/
│   ├── components/
│   │   ├── PostCard/
│   │   │   ├── PostCard.tsx
│   │   │   └── PostCard.stories.tsx
│   │   └── PostList/
│   │       ├── PostList.tsx
│   │       └── PostList.stories.tsx
│   ├── pages/
│   │   ├── BlogPage/
│   │   │   └── BlogPage.tsx
│   │   └── BlogPostPage/
│   │       └── BlogPostPage.tsx
│   ├── widgets/
│   │   └── index.ts           # Updated with new exports
│   └── components/
│       └── index.ts           # Updated with new exports
├── infra/
│   ├── routes/
│   │   ├── blog.tsx           # /blog route
│   │   └── blog.$id.tsx       # /blog/:id route
│   └── services/
│       └── devto/
│           ├── client.ts       # DEV.to API client
│           └── types.ts        # API response types
└── main.tsx                   # Unchanged
```

**Structure Decision**: Single project web application. New pages follow existing HomePage/ResumePage patterns. API client lives in `src/infra/services/` (new directory) to maintain layer separation — infrastructure code fetches data, application code renders it. Route files follow TanStack Router file-based conventions.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| New `src/infra/services/` directory | Needed for provider abstraction to support future provider swaps | Could inline fetch in page components, but violates layer separation and makes provider swapping harder |
