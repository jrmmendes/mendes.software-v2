# Feature Specification: dotmendes Blog UI

**Feature Branch**: `001-devto-blog`  
**Created**: 2026-03-31  
**Status**: Draft  
**Input**: User description: "You must consume only the blogposts of 'dotmendes' user. It must be a simple blog UI for this person only (which could be changed later in favor of another 'provider' e.g. leaflet, or even a custom backend). The blog page must be a new 'Blog' item in the home page and must route to /blog. This will be an intermediary page with the list of blogs, sorted from most recent to oldests. Then, when clicked, each card must show the post content in as /blog/:id page. Its importante to follow the current application style."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Navigate to Blog from Homepage (Priority: P1)

As a visitor, I want to see a "Blog" link on the homepage and click it to access the blog section so that I can browse dotmendes' articles.

**Why this priority**: Without discoverability from the homepage, users cannot find the blog. This is the entry point.

**Independent Test**: Can be fully tested by verifying a "Blog" link exists on the homepage and navigates to the blog listing page.

**Acceptance Scenarios**:

1. **Given** the user is on the homepage, **When** they view the navigation links, **Then** a "Blog" link is visible alongside existing links (Github, Linkedin, DEV, etc.)
2. **Given** the user clicks the "Blog" link, **When** navigation completes, **Then** the URL changes to /blog and the blog listing page is displayed

---

### User Story 2 - Browse Blog Post List (Priority: P1)

As a visitor, I want to see a list of dotmendes' blog posts sorted from most recent to oldest so that I can discover their latest content.

**Why this priority**: This is the core value proposition - displaying the author's posts in a browsable format.

**Independent Test**: Can be fully tested by verifying the /blog page displays post cards with title, date, and preview, ordered newest-first.

**Acceptance Scenarios**:

1. **Given** the user visits /blog, **When** the page loads, **Then** a list of dotmendes' blog posts is displayed as cards, sorted from most recent to oldest
2. **Given** the user sees the post list, **When** they view a card, **Then** it shows the post title, publication date, and a short preview or excerpt
3. **Given** there are many posts, **When** the user scrolls, **Then** additional posts load or pagination controls are available

---

### User Story 3 - Read Full Blog Post (Priority: P2)

As a visitor, I want to click a post card and read the full content on a dedicated page so that I can consume the article comfortably.

**Why this priority**: Reading the full content is the primary purpose of the blog. Users who click a post must be able to read it.

**Independent Test**: Can be fully tested by clicking any post card and verifying the full content renders correctly on the detail page.

**Acceptance Scenarios**:

1. **Given** the user is on the blog listing page, **When** they click a post card, **Then** they are navigated to /blog/:id with the full post content displayed
2. **Given** the user is reading a full post, **When** the content includes images, code blocks, or formatted text, **Then** all elements render correctly
3. **Given** the user finishes reading, **When** they want to return, **Then** a back navigation element takes them to the blog listing page

---

### Edge Cases

- What happens when the content provider (e.g., DEV.to API) is unavailable? System displays a graceful error message indicating the blog is temporarily unavailable
- How does the system handle posts with extremely long content? The detail page uses a scrollable card consistent with the ResumePage pattern
- What happens when the provider changes (e.g., from DEV.to to leaflet or custom backend)? The system switches to the new provider without requiring UI changes
- What happens when there are no posts to display? System shows a friendly message indicating no posts are available yet
- How does the system handle a slow or intermittent internet connection? System shows a loading state and cached content when available
- What happens when a user navigates directly to /blog/:id with an invalid or unknown ID? System displays a "post not found" message with a link back to the blog listing

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display a "Blog" navigation link on the homepage that routes to /blog
- **FR-002**: System MUST fetch and display blog posts exclusively from the configured content provider for a single specified author
- **FR-003**: System MUST display the blog listing page at /blog with post cards sorted from most recent to oldest
- **FR-004**: System MUST display each post card with title, publication date, and a short preview or excerpt
- **FR-005**: System MUST navigate to /blog/:id when a user clicks a post card, displaying the full post content
- **FR-006**: System MUST display full post content including text, images, and code blocks with proper formatting
- **FR-007**: System MUST display a back navigation element on the post detail page consistent with the existing BackLink pattern
- **FR-008**: System MUST support switching the content provider source without requiring UI changes
- **FR-009**: System MUST handle content provider errors gracefully with user-friendly error messages
- **FR-010**: System MUST display post metadata including publication date and reading time estimate
- **FR-011**: System MUST support pagination or load-more functionality for browsing posts when the author has many articles
- **FR-012**: System MUST follow the existing application visual style including dark theme, card-based layout containers, typography hierarchy, and design tokens

### Key Entities

- **Blog Post**: An article authored by dotmendes with title, content, tags, publication date, reading time estimate, and a unique identifier used for routing
- **Content Provider**: The source system supplying blog posts (initially DEV.to, but designed to be swappable to alternatives like leaflet or a custom backend)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can navigate from the homepage to the blog listing page in 1 click
- **SC-002**: Users can load the blog listing page and see the post list in under 2 seconds on standard broadband connections
- **SC-003**: 95% of post views successfully display full content including images and code blocks without formatting errors
- **SC-004**: System gracefully displays an error message within 3 seconds when the content provider is unavailable
- **SC-005**: Users can navigate from the blog listing to reading a full post in 1 click
- **SC-006**: Switching the content provider requires configuration changes only, with no UI code modifications

## Assumptions

- The blog is read-only; visitors cannot create, edit, or comment on posts through this system
- The content provider (initially DEV.to) supplies all necessary data including post content and metadata
- The system is designed with a provider abstraction that allows swapping data sources without UI changes
- Users have internet connectivity to fetch content from the provider
- All content rights and attribution remain with dotmendes as the original author
- The blog displays content as provided by the source without modification or curation
- No user authentication is required for reading posts (public blog)
- The blog pages use the same layout pattern as existing pages (PageLayout + Card/ScrollableCard)
- Post IDs used in /blog/:id routing come from the content provider's unique post identifiers
