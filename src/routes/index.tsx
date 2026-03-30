import { createFileRoute } from '@tanstack/react-router'
import { HeroBanner } from '../styles/HeroBanner'
import { PageMain } from '../styles/PageMain'
import { ForkmeRibbon } from '../styles/ForkmeRibbon'
import { BrandImage } from '../styles/BrandImage'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const links = [
  { label: 'Github', href: 'https://github.com/jrmmendes' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/jrmmendes/' },
  { label: 'DEV', href: 'https://dev.to/dotmendes' },
  { label: 'Discogs', href: 'https://www.discogs.com/pt_BR/user/jrmmendes/collection' },
]

function HomePage() {
  return (
    <PageMain>
      <HeroBanner className="hero-banner">
        <ForkmeRibbon className="github-ribbon">
          <a
            href="https://github.com/jrmmendes/mendes.software-v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fork-me on github
          </a>
        </ForkmeRibbon>
        <figure>
          <BrandImage className="brand-image">
            <i className="icon icon-jm-logo" />
            <h1 className="name">Junior Mendes</h1>
          </BrandImage>
        </figure>
        <ul className="link-list">
          {links.map((item) => (
            <li key={item.href}>
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </HeroBanner>
    </PageMain>
  )
}
