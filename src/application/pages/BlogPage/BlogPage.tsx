import { PageLayout, Typography } from '@/application/components'
import { PostList } from '@/application/components'
import { ScrollableCard } from '@/application/widgets'
import { client } from '@/infra/services/devto/client'
import { useEffect, useState } from 'react'
import type { BlogPost } from '@/infra/services/devto/types'

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function fetchPosts() {
      try {
        const data = await client.getPosts()
        if (!cancelled) {
          setPosts(data)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load posts')
          setLoading(false)
        }
      }
    }
    fetchPosts()
    return () => { cancelled = true }
  }, [])

  return (
    <PageLayout>
      <ScrollableCard>
        {loading && <Typography variant="body">Loading posts...</Typography>}
        {error && <Typography variant="body" css={{ color: '$gray2' }}>Error: {error}</Typography>}
        {!loading && !error && posts.length === 0 && (
          <Typography variant="body">No posts available yet.</Typography>
        )}
        {!loading && !error && posts.length > 0 && <PostList posts={posts} />}
      </ScrollableCard>
    </PageLayout>
  )
}
