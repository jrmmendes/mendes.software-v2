import { createRootRoute, Outlet } from '@tanstack/react-router'
import { globalStyles } from '@/shared/styles/globalStyles'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  globalStyles()

  return (
    <>
      <Outlet />
    </>
  )
}