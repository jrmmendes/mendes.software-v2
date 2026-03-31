import { 
  PageLayout, 
  Flex, 
  Card, 
  Icon, 
  Link,
  RibbonWrapper, 
  RibbonLink, 
  Typography 
} from '@/application/components'
import { List, ListItem } from '@/application/widgets'

type Link = {
  label: string
  to?: string
  href?: string
}

const links: Link[] = [
  { label: 'Github', href: 'https://github.com/jrmmendes' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/jrmmendes/' },
  { label: 'DEV', href: 'https://dev.to/dotmendes' },
  { label: 'Discogs', href: 'https://www.discogs.com/pt_BR/user/jrmmendes/collection' },
  { label: 'Blog', to: '/blog' },
  //{ label: 'Resume', to: '/resume' },
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
          <Typography variant="h1">Junior Mendes</Typography>
        </Flex>
        <List inline>
          {links.map((item) => (
            <ListItem key={item.href ?? item.to ?? item.label} spacing="link">
              {item.href ? (
                <Link href={item.href} target="_blank" rel="noopener noreferrer" variant="hoverable">
                  {item.label}
                </Link>
              ) : (
                <Link to={item.to} rel="noopener noreferrer" variant="hoverable">
                  {item.label}
                </Link>
              )}
            </ListItem>
          ))}
        </List>
      </Card>
    </PageLayout>
  )
}
