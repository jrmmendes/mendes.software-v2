import { RouterProvider, createMemoryHistory, createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { render } from '@testing-library/react'
import type { ReactElement } from 'react'

export function renderWithRouter(ui: ReactElement, { initialEntries = ['/'] }: { initialEntries?: string[] } = {}) {
  const rootRoute = createRootRoute({
    component: () => <Outlet />, 
  })

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <>{ui}</>,
  })

  const routeTree = rootRoute.addChildren([indexRoute])

  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries }),
  })

  return render(<RouterProvider router={router} />)
}