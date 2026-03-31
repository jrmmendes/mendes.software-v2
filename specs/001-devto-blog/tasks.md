# Tasks: dotmendes Blog UI

**Input**: Design documents from `/specs/001-devto-blog/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/blog-provider.md

**Tests**: Required per constitution Principle III (TDD) and Principle IV (Storybook).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single project at repository root
- `src/application/` — UI components, pages, widgets
- `src/infra/` — Routes, services, styles

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Add DOMPurify dependency for HTML sanitization

- [x] T001 Install DOMPurify and its TypeScript types (`npm install dompurify && npm install -D @types/dompurify`)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core types, provider interface, and DEV.to API client that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 [P] Define BlogPost, BlogProvider, and ProviderError types in `src/infra/services/devto/types.ts`
- [x] T003 [P] Write unit tests for DEV.to API client in `src/infra/services/devto/client.tests.tsx`
- [x] T004 Implement DEV.to API client (getPosts, getPost) with field mapping and error handling in `src/infra/services/devto/client.ts`
- [x] T005 [P] Implement in-memory post cache utility in `src/infra/services/devto/cache.ts`

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 — Navigate to Blog from Homepage (Priority: P1) 🎯 MVP

**Goal**: Add a "Blog" link to the homepage that routes to `/blog` and displays the blog listing page shell

**Independent Test**: Verify a "Blog" link exists on the homepage, clicking it navigates to `/blog`, and the blog page renders (even if empty)

### Tests for User Story 1

- [x] T006 [P] [US1] Write test for Blog link presence and navigation in `src/application/pages/HomePage/HomePage.tests.tsx`
- [x] T007 [P] [US1] Write test for BlogPage renders without errors in `src/application/pages/BlogPage/BlogPage.tests.tsx`
- [x] T008 [P] [US1] Create BlogPage component (placeholder with loading state) in `src/application/pages/BlogPage/BlogPage.tsx`
- [x] T009 [P] [US1] Create `/blog` route file in `src/infra/routes/blog.tsx`
- [x] T010 [US1] Add "Blog" link to homepage navigation list in `src/application/pages/HomePage/HomePage.tsx`
- [x] T011 [US1] Export barrel updates in `src/application/components/index.ts`

**Checkpoint**: Users can navigate from homepage to `/blog` and see the blog page shell

---

## Phase 4: User Story 2 — Browse Blog Post List (Priority: P1)

**Goal**: Display dotmendes' blog posts as cards on `/blog`, sorted newest-first, with title, date, and preview

**Independent Test**: Visit `/blog` and verify post cards render with correct data, sorted by publication date (newest first)

### Tests for User Story 2

- [x] T012 [P] [US2] Write test for PostCard component rendering in `src/application/components/PostCard/PostCard.tests.tsx`
- [x] T013 [P] [US2] Write test for PostList component rendering in `src/application/components/PostList/PostList.tests.tsx`
- [x] T014 [US2] Write integration test for BlogPage fetching and displaying posts in `src/application/pages/BlogPage/BlogPage.tests.tsx`
- [x] T015 [P] [US2] Create PostCard component with Stitches styling in `src/application/components/PostCard/PostCard.tsx`
- [x] T016 [P] [US2] Create PostCard Storybook stories in `src/application/components/PostCard/PostCard.stories.tsx`
- [x] T017 [P] [US2] Create PostList component in `src/application/components/PostList/PostList.tsx`
- [x] T018 [P] [US2] Create PostList Storybook stories in `src/application/components/PostList/PostList.stories.tsx`
- [x] T019 [US2] Update components barrel export in `src/application/components/index.ts`
- [x] T020 [US2] Implement BlogPage data fetching, loading state, error handling, and PostList rendering in `src/application/pages/BlogPage/BlogPage.tsx`
- [x] T021 [US2] Handle empty state (no posts message) in `src/application/pages/BlogPage/BlogPage.tsx`

**Checkpoint**: Blog listing page fully functional — users can browse dotmendes' posts as cards

---

## Phase 5: User Story 3 — Read Full Blog Post (Priority: P2)

**Goal**: Click a post card to navigate to `/blog/:id` and read the full post content with proper formatting

**Independent Test**: Click any post card from `/blog`, verify navigation to `/blog/:id`, and confirm full content (text, images, code blocks) renders correctly with a back navigation link

### Tests for User Story 3

- [x] T022 [P] [US3] Write test for BlogPostPage rendering with valid post in `src/application/pages/BlogPostPage/BlogPostPage.tests.tsx`
- [x] T023 [P] [US3] Write test for BlogPostPage "not found" state with invalid ID in `src/application/pages/BlogPostPage/BlogPostPage.tests.tsx`
- [x] T024 [P] [US3] Create `/blog/:id` route file in `src/infra/routes/blog.$id.tsx`
- [x] T025 [US3] Create BlogPostPage component with data fetching, HTML sanitization, and BackLink in `src/application/pages/BlogPostPage/BlogPostPage.tsx`
- [x] T026 [US3] Handle "post not found" state with link back to listing in `src/application/pages/BlogPostPage/BlogPostPage.tsx`
- [x] T027 [US3] Add PostCard click navigation to `/blog/:id` in `src/application/components/PostCard/PostCard.tsx`

**Checkpoint**: All user stories independently functional — full blog browsing and reading experience

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T028 [P] Run `npx tsc --noEmit` and fix any type errors
- [x] T029 [P] Run `npm run test` and verify all tests pass
- [x] T030 [P] Run `npm run build` and verify production build succeeds
- [ ] T031 [P] Run `npm run storybook` and verify all stories render without warnings
- [ ] T032 Verify existing Storybook stories still pass (no regressions)
- [ ] T033 Manual QA: verify blog matches existing app visual style (dark theme, typography, spacing)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories proceed sequentially in priority order (P1 → P2)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) — No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) — Depends on US1 route existing, but independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) — Depends on PostCard from US2 for click navigation

### Within Each User Story

- Tests MUST be written and FAIL before implementation
- Types before services
- Services before UI components
- Components before pages
- Story complete before moving to next priority

### Parallel Opportunities

- T002, T003, T005 can run in parallel (different files, no inter-dependencies)
- T006, T007, T008, T009 can run in parallel (different files)
- T012, T013, T015, T016, T017, T018 can run in parallel (different files)
- T022, T023, T024 can run in parallel (different files)
- T028, T029, T030, T031 can run in parallel (verification commands)

---

## Parallel Example: User Story 2

```bash
# Launch all component implementations together:
Task: "Create PostCard component in src/application/components/PostCard/PostCard.tsx"
Task: "Create PostCard stories in src/application/components/PostCard/PostCard.stories.tsx"
Task: "Create PostList component in src/application/components/PostList/PostList.tsx"
Task: "Create PostList stories in src/application/components/PostList/PostList.stories.tsx"

# Launch all tests together:
Task: "Write PostCard test in src/application/components/PostCard/PostCard.test.tsx"
Task: "Write PostList test in src/application/components/PostList/PostList.test.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 + 2 Only)

1. Complete Phase 1: Setup (DOMPurify install)
2. Complete Phase 2: Foundational (types, interface, client, cache)
3. Complete Phase 3: User Story 1 (Blog link + route + page shell)
4. Complete Phase 4: User Story 2 (PostCard, PostList, populated listing)
5. **STOP and VALIDATE**: Users can navigate to `/blog` and browse posts
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Blog link navigates to empty page → Test independently
3. Add User Story 2 → Blog listing shows posts → Test independently → Deploy/Demo (MVP!)
4. Add User Story 3 → Click post to read full content → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Verify tests fail before implementing (TDD per constitution)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Total tasks: 33
