import { createFileRoute } from '@tanstack/react-router'
import { BlogPage } from '@/pages/BlogPage/BlogPage'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})