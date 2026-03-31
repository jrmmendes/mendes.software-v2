import { Flex, Heading, List, ListItem } from '../components'

interface ResumeEntryProps {
  title: string
  role: string
  stack: string
  details: string[]
}

export function ResumeEntry({ title, role, stack, details }: ResumeEntryProps) {
  return (
    <Flex direction="column" css={{ marginTop: '$md' }}>
      <Heading level={2}>{title}</Heading>
      <Flex direction="column" css={{ gap: '$xs' }}>
        <Heading level={3}>{role}</Heading>
        <Heading level={3}>Stack: {stack}</Heading>
      </Flex>
      <List details>
        {details.map((detail, i) => (
          <ListItem key={i} spacing="detail" dangerouslySetInnerHTML={{ __html: detail }} />
        ))}
      </List>
    </Flex>
  )
}
