import { createFileRoute } from '@tanstack/react-router'
import { ResumePage } from '@/pages/ResumePage/ResumePage'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})