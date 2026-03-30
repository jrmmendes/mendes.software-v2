import { createFileRoute } from '@tanstack/react-router'
import { PageLayout, Flex, Card, Icon, Heading, List, ListItem, Link } from '../components'
import { styled } from '../styles/stitches.config'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const links = [
  { label: 'Github', href: 'https://github.com/jrmmendes' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/jrmmendes/' },
  { label: 'DEV', href: 'https://dev.to/dotmendes' },
  { label: 'Discogs', href: 'https://www.discogs.com/pt_BR/user/jrmmendes/collection' },
]

const RibbonWrapper = styled('div', {
  position: 'absolute',
  overflow: 'hidden',
  boxSizing: 'border-box',
  top: 0,
  right: 0,
  height: '10em',
  width: '10em',
  zIndex: '$ribbon',
})

const RibbonLink = styled('a', {
  boxSizing: 'border-box',
  position: 'absolute',
  textAlign: 'center',
  textDecoration: 'none',
  border: '1px solid $light',
  background: '$primary',
  padding: '0.7em 0',
  top: '2.2em',
  right: '-3.2em',
  width: '14.14em',
  transform: 'rotate(45deg)',
  color: '$light',
  resetLink: true,

  '&:hover': {
    background: '$light',
    color: '$primary',
  },
})

function HomePage() {
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
