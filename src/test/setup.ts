import '@testing-library/jest-dom/vitest'

import { vi } from 'vitest'

// jsdom implements scrollTo as "not implemented" (throws). TanStack Router calls it for scroll restoration.
vi.stubGlobal('scrollTo', vi.fn())
