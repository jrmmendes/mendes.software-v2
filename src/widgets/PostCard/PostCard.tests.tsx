import { describe, it, expect } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import { PostCard } from './PostCard'
import { renderWithRouter } from '@/shared/test/testUtils'

describe('PostCard', () => {
  const defaultProps = {
    url: 'https://dev.to/dotmendes/test-post',
    title: 'Test Post Title',
    description: 'A short description of the post',
    publishedAt: new Date('2024-06-15T10:00:00Z'),
    readingTimeMinutes: 5,
    tags: ['typescript', 'react'],
  }

  it('renders title and description', async () => {
    renderWithRouter(<PostCard {...defaultProps} />)
    await waitFor(() => {
      expect(screen.getByText('Test Post Title')).toBeInTheDocument()
    })
    expect(screen.getByText('A short description of the post')).toBeInTheDocument()
  })

  it('renders reading time', async () => {
    renderWithRouter(<PostCard {...defaultProps} />)
    await waitFor(() => {
      expect(screen.getByText('5 min read')).toBeInTheDocument()
    })
  })

  it('renders tags', async () => {
    renderWithRouter(<PostCard {...defaultProps} />)
    await waitFor(() => {
      expect(screen.getByText('#typescript')).toBeInTheDocument()
    })
    expect(screen.getByText('#react')).toBeInTheDocument()
  })

  it('renders without description when not provided', async () => {
    renderWithRouter(<PostCard {...defaultProps} description={undefined} />)
    await waitFor(() => {
      expect(screen.getByText('Test Post Title')).toBeInTheDocument()
    })
    expect(screen.queryByText('A short description of the post')).not.toBeInTheDocument()
  })

  it('renders without tags when empty', async () => {
    renderWithRouter(<PostCard {...defaultProps} tags={[]} />)
    await waitFor(() => {
      expect(screen.getByText('Test Post Title')).toBeInTheDocument()
    })
    expect(screen.queryByText('#typescript')).not.toBeInTheDocument()
  })

  it('renders as a link to dev.to', async () => {
    renderWithRouter(<PostCard {...defaultProps} />)
    await waitFor(() => {
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', 'https://dev.to/dotmendes/test-post')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
