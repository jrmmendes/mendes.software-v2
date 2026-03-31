import type { Meta, StoryObj } from '@storybook/react'
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router'
import { BackArrow, BackLink } from './BackLink'

function createStoryRouter(Story: () => JSX.Element) {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <Story />,
  })

  const routeTree = rootRoute.addChildren([indexRoute])

  return createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ['/'],
    }),
  })
}

const meta = {
  title: 'Components/BackLink',
  component: BackLink,
} satisfies Meta<typeof BackLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '/',
    children: (
      <>
        <BackArrow />
        Voltar
      </>
    ),
  },
  decorators: [(Story) => <RouterProvider router={createStoryRouter(() => Story())} />],
}

export const ArrowOnly: Story = {
  render: () => <BackArrow />,
}
