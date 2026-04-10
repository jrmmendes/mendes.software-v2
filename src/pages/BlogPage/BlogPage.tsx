import { useQuery } from '@tanstack/react-query'
import { PageLayout, Typography } from '@/shared/ui'
import { PostList, ScrollableCard } from '@/widgets'
import { fetchPosts } from '@/entities/Post/api'

export function BlogPage() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  })

  return (
    <PageLayout>
      <ScrollableCard>
        {isLoading && <Typography variant="body">Loading posts...</Typography>}
        {error && (
          <Typography variant="body" css={{ color: '$gray2' }}>
            Error: {error instanceof Error ? error.message : 'Failed to load posts'}
          </Typography>
        )}
        {!isLoading && !error && posts?.length === 0 && (
          <Typography variant="body">No posts available yet.</Typography>
        )}
        {!isLoading && !error && posts && posts.length > 0 && <PostList posts={posts} />}
      </ScrollableCard>
    </PageLayout>
  )
}