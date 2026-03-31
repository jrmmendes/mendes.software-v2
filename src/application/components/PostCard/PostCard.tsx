import { styled } from '@stitches/react'
import { Typography } from '@/application/components'
import { Flex } from '@/application/components'

const CardWrapper = styled('a', {
  border: '1px solid $light',
  borderRadius: '$roundness',
  padding: '$md',
  marginBottom: '$md',
  cursor: 'pointer',
  transition: 'border-color 180ms ease-in-out',
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  '&:hover': {
    borderColor: '$gray2',
  },
})

interface PostCardProps {
  url: string
  title: string
  description?: string
  publishedAt: Date
  readingTimeMinutes: number
  tags?: string[]
}

export function PostCard({ url, title, description, publishedAt, readingTimeMinutes, tags }: PostCardProps) {
  const dateStr = publishedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <CardWrapper
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Flex direction="column" gap="xs">
        <Typography variant="h2" css={{ fontSize: '$lg' }}>{title}</Typography>
        {description && (
          <Typography variant="body" css={{ color: '$gray2', fontSize: '$sm' }}>
            {description}
          </Typography>
        )}
        <Flex gap="sm" css={{ flexWrap: 'wrap' }}>
          <Typography variant="body" css={{ color: '$mailGray', fontSize: '$xs' }}>
            {dateStr}
          </Typography>
          <Typography variant="body" css={{ color: '$mailGray', fontSize: '$xs' }}>
            {readingTimeMinutes} min read
          </Typography>
        </Flex>
        {tags && tags.length > 0 && (
          <Flex gap="xs" css={{ flexWrap: 'wrap', marginTop: '$xs' }}>
            {tags.slice(0, 5).map((tag) => (
              <Typography
                key={tag}
                variant="body"
                css={{
                  color: '$gray2',
                  fontSize: '$xs',
                  border: '1px solid $mailGray',
                  borderRadius: '$roundness',
                  padding: '$xxs $xs',
                }}
              >
                #{tag}
              </Typography>
            ))}
          </Flex>
        )}
      </Flex>
    </CardWrapper>
  )
}
