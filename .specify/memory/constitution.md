<!--
Sync Impact Report:
- Version change: 0.0.0 (template) → 1.0.0 (initial)
- Modified principles: None (all new - template → concrete)
- Added sections: Core Principles (5), Additional Constraints, Development Workflow, Governance
- Removed sections: None
- Templates requiring updates:
  ✅ .specify/templates/plan-template.md - Constitution Check section references generic gates (no changes needed)
  ✅ .specify/templates/spec-template.md - No constitution-specific constraints to propagate
  ✅ .specify/templates/tasks-template.md - Task structure already supports TDD workflow
  ✅ .specify/templates/commands/*.md - No agent-specific references found
  ✅ README.md - No principle references to update
- Follow-up TODOs: None
-->

# Mendes.software Constitution

## Core Principles

### I. Component-First Architecture

Every UI element MUST be a self-contained, independently testable, and documented
component. Components live in `src/application/components/` and must:

- Accept all configuration via props; no hidden global state dependencies.
- Export a default component plus any sub-components in the same file.
- Include Storybook stories (.stories.tsx) demonstrating all variants.
- Have a single, clear purpose — no multi-responsibility components.

**Rationale**: Component-driven development enables parallel work, isolated testing,
and consistent design system growth.

### II. Layered Separation

The codebase MUST maintain strict separation between application and infrastructure
layers:

- `src/application/` — UI components, pages, and composite widgets only.
- `src/infra/` — Routing, styling (Stitches config), test setup, and environment config.
- Application code MUST NOT import from sibling application directories; use the
  `@/*` path alias for cross-layer imports from infra.
- Infrastructure code MUST NOT contain business logic or UI rendering.

**Rationale**: Clean boundaries prevent coupling, make testing straightforward,
and allow each layer to evolve independently.

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
- **Routing**: @tanstack/react-router with file-based routing in `src/infra/routes/`.
- **Build**: Vite 5 with the TanStack Router plugin.
- **Deployment**: Netlify with SPA redirect configuration (`netlify.toml`).

### Code Organization

- Components: `src/application/components/`
- Pages: `src/application/pages/`
- Widgets (composite components): `src/application/widgets/`
- Routes: `src/infra/routes/`
- Styles: `src/infra/styles/`
- Test utilities: `src/infra/test/`

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

**Version**: 1.0.0 | **Ratified**: 2026-03-30 | **Last Amended**: 2026-03-31
