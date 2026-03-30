import { createFileRoute } from '@tanstack/react-router'
import { PageLayout, ScrollableCard } from '../components'

export const Route = createFileRoute('/tools')({
  component: ToolsPage,
})

function ToolsPage() {
  return (
    <PageLayout>
      <ScrollableCard>
        <h1>Test</h1>
      </ScrollableCard>
    </PageLayout>
  )
}
