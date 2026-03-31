import { createFileRoute } from '@tanstack/react-router'
import { ToolsPage } from '@/application/pages/ToolsPage/ToolsPage'

export const Route = createFileRoute('/tools')({
  component: ToolsPage,
})
