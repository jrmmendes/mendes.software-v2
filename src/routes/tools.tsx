import { createFileRoute } from '@tanstack/react-router'
import { ToolsSection } from '../styles/ToolsSection'
import { PageMain } from '../styles/PageMain'

export const Route = createFileRoute('/tools')({
  component: ToolsPage,
})

function ToolsPage() {
  return (
    <PageMain>
      <ToolsSection className="tools-section">
        <h1>Test</h1>
      </ToolsSection>
    </PageMain>
  )
}
