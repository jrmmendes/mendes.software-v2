import { PageLayout, Typography } from '@/shared/ui'
import { PostList } from '@/widgets'
import { ScrollableCard } from '@/widgets'
import { client } from '@/entities/Post/api'
import { useEffect, useState } from 'react'
import type { BlogPost } from '@/entities/Post/model'

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