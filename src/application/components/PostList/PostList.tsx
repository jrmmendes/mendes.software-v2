import { Flex } from '@/application/components'
import { PostCard } from '@/application/components/PostCard/PostCard'
import type { BlogPost } from '@/infra/services/devto/types'

interface PostListProps {
  posts: BlogPost[]
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <Flex direction="column">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          url={post.url}
          title={post.title}
          description={post.description}
          publishedAt={post.publishedAt}
          readingTimeMinutes={post.readingTimeMinutes}
          tags={post.tags}
        />
      ))}
    </Flex>
  )
}
