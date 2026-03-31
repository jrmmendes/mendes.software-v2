import { createFileRoute } from '@tanstack/react-router'
import { BlogPage } from '@/application/pages/BlogPage/BlogPage'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})
