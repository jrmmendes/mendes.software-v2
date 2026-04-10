<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0
- Modified principles: I (Feature Sliced Architecture → Feature Sliced Design), II (Layered Separation updated)
- Added sections: FSD layer definitions, import rule, segments concept
- Removed sections: None
- Templates requiring updates: None
- Follow-up TODOs: None
-->

# Mendes.software Constitution

## Core Principles

### I. Feature Sliced Design

The codebase MUST follow Feature Sliced Design (FSD) methodology with three
organizational levels:

**Layers** (top-level directories, dependency flows downward):
- `app/` — Entry points, routing, providers, global styles.
- `pages/` — Full pages or major page sections.
- `widgets/` — Self-contained UI blocks delivering complete use cases.
- `features/` — Reusable product features (user actions with business value).
- `entities/` — Business entities (user, product, etc.).
- `shared/` — Reusable code detached from business specifics (UI kit, API client, lib).

**Slices** (directories inside layers, partitioned by business domain):
- Slices cannot import other slices on the same layer.
- Naming reflects business domain, not technical purpose.

**Segments** (technical subdivision inside slices):
- `ui/` — Components and visual elements.
- `model/` — Business logic, state, data transformations.
- `api/` — API calls and requests.
- `lib/` — Internal libraries and utilities.

**Import Rule**: A module in any layer may only import from layers strictly
below it. `app/` and `shared/` are exceptions (both are layers and segments).

**Rationale**: FSD provides explicit architecture that scales with business
complexity, enables safe refactoring, and makes the codebase navigable by
domain.

### III. Test-Driven Development (NON-NEGOTIABLE)

All new functionality MUST follow TDD discipline:

- Tests written before implementation code.
- Tests MUST fail initially (Red), then pass after implementation (Green), then
  refactored for clarity (Refactor).
- Unit tests use Vitest + Testing Library with jsdom environment.
- Test files colocated at `src/**/*.tests.tsx`.
- No PR merges without passing tests (`npm run test`).

**Rationale**: TDD catches regressions early, documents expected behavior, and
prevents untested code from reaching production.

### IV. Storybook-Driven Development

Every component MUST be developed and verified in Storybook:

- Each component requires a `.stories.tsx` file with at least one default export
  story and one variant story.
- Stories MUST cover interactive states (hover, focus, disabled) where applicable.
- Storybook serves as the living component catalog — if it is not in Storybook,
  it does not exist.

**Rationale**: Visual development catches UI regressions early and provides a
shared reference for design consistency.

### V. Strict Type Safety

TypeScript strict mode is non-negotiable:

- `noUnusedLocals` and `noUnusedParameters` MUST remain enabled.
- No `any` types — use `unknown` with type guards when type is genuinely dynamic.
- All module imports MUST use the `@/*` path alias (no relative `../..` chains).
- `tsc` MUST pass with zero errors before any `vite build`.

**Rationale**: Type safety catches entire classes of bugs at compile time and
serves as executable documentation.

## Additional Constraints

### Technology Stack

- **Framework**: React 18 with functional components and hooks.
- **Styling**: @stitches/react for CSS-in-JS — no raw CSS files or CSS modules.
- **Routing**: @tanstack/react-router with file-based routing in `src/app/`.
- **Build**: Vite 5 with the TanStack Router plugin.
- **Deployment**: Netlify with SPA redirect configuration (`netlify.toml`).
- **Architecture**: Feature Sliced Design (processes layer deprecated).

### Code Organization

Following FSD structure:
- App: `src/app/` (routing, providers, entry points)
- Pages: `src/pages/`
- Widgets: `src/widgets/`
- Features: `src/features/`
- Entities: `src/entities/`
- Shared: `src/shared/` (UI kit, API, utilities)
- Infrastructure: `src/app/` or `src/shared/lib/` (routing, styling config, test setup)

### Node Version

Project pins Node version via `.node-version`. Development environment MUST match.

## Development Workflow

### Pre-Commit Checklist

- [ ] `npm run test` passes with zero failures.
- [ ] `npm run build` completes without errors.
- [ ] Storybook stories render without warnings.
- [ ] No TypeScript compiler errors or unused variable warnings.
- [ ] No trailing whitespace or formatting inconsistencies.

### Code Review Requirements

- All changes require review before merging to main.
- Reviewers MUST verify constitution compliance (principles I-V).
- Complexity additions MUST be justified in the PR description.

### Quality Gates

- Test coverage MUST NOT decrease on modified files.
- New components without stories are rejected.
- New exports without types are rejected.

## Governance

This constitution supersedes all other development practices in the project.
Amendments require:

1. A proposed change documented with rationale.
2. Version bump following semantic versioning:
   - **MAJOR**: Backward-incompatible principle removals or redefinitions.
   - **MINOR**: New principles, sections, or materially expanded guidance.
   - **PATCH**: Clarifications, wording improvements, typo fixes.
3. Approval from the project owner (mendes / jrmmendes@outlook.com).
4. Update to this file with a Sync Impact Report at the top.

All PRs and reviews MUST verify compliance with these principles.
Complexity must be justified against YAGNI and simplicity principles.
For runtime development guidance, consult this constitution and the project README.

**Version**: 1.1.0 | **Ratified**: 2026-03-30 | **Last Amended**: 2026-04-10
