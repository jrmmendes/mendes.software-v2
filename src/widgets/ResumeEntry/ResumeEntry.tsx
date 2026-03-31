import { Flex, List, ListItem, Typography } from '@/components'

interface ResumeEntryProps {
  title: string
  role: string
  stack: string
  details: string[]
}

export function ResumeEntry({ title, role, stack, details }: ResumeEntryProps) {
  return (
    <Flex direction="column" css={{ marginTop: '$md' }}>
      <Typography variant="h2">{title}</Typography>
      <Flex direction="column" css={{ gap: '$xs' }}>
        <Typography variant="h3">{role}</Typography>
        <Typography variant="h3">Stack: {stack}</Typography>
      </Flex>
      <List details>
        {details.map((detail, i) => (
          <ListItem key={i} spacing="detail" dangerouslySetInnerHTML={{ __html: detail }} />
        ))}
      </List>
    </Flex>
  )
}
