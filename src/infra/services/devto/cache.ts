import { BlogPost } from './types'

class PostCache {
  private posts: BlogPost[] | null = null
  private postMap: Map<string, BlogPost> = new Map()

  setPosts(posts: BlogPost[]): void {
    this.posts = posts
    this.postMap.clear()
    for (const post of posts) {
      this.postMap.set(post.id, post)
    }
  }

  getPosts(): BlogPost[] | null {
    return this.posts
  }

  setPost(post: BlogPost): void {
    this.postMap.set(post.id, post)
    if (this.posts !== null) {
      const idx = this.posts.findIndex((p) => p.id === post.id)
      if (idx >= 0) {
        this.posts[idx] = post
      } else {
        this.posts.push(post)
      }
    }
  }

  getPost(id: string): BlogPost | undefined {
    return this.postMap.get(id)
  }

  clear(): void {
    this.posts = null
    this.postMap.clear()
  }
}

export const cache = new PostCache()
