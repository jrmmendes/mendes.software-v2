import { PageLayout, Flex, Card, Icon, Heading, List, ListItem, Link, RibbonWrapper, RibbonLink } from '../components'

const links = [
  { label: 'Github', href: 'https://github.com/jrmmendes' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/jrmmendes/' },
  { label: 'DEV', href: 'https://dev.to/dotmendes' },
  { label: 'Discogs', href: 'https://www.discogs.com/pt_BR/user/jrmmendes/collection' },
]

export function HomePage() {
  return (
    <PageLayout>
      <Card css={{ position: 'relative', centeredFlex: true, flexDirection: 'column' }}>
        <RibbonWrapper>
          <RibbonLink
            href="https://github.com/jrmmendes/mendes.software-v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fork-me on github
          </RibbonLink>
        </RibbonWrapper>
        <Flex direction="column" align="center" justify="center" gap="md" css={{ marginBottom: '$xl' }}>
          <Icon className="icon icon-jm-logo" size="logo" />
          <Heading level={1}>Junior Mendes</Heading>
        </Flex>
        <List inline>
          {links.map((item) => (
            <ListItem key={item.href} spacing="link">
              <Link href={item.href} target="_blank" rel="noopener noreferrer" variant="hoverable">
                {item.label}
              </Link>
            </ListItem>
          ))}
        </List>
      </Card>
    </PageLayout>
  )
}
