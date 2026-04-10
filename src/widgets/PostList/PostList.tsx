import { Flex } from '@/shared/ui'
import { PostCard } from '@/widgets/PostCard/PostCard'
import type { BlogPost } from '@/entities/Post/model'

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