import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'fontello',
    src: `url(/assets/fonts/fontello.eot#iefix) format('embedded-opentype'),
          url(/assets/fonts/fontello.woff2) format('woff2'),
          url(/assets/fonts/fontello.woff) format('woff'),
          url(/assets/fonts/fontello.ttf) format('truetype')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  '[class^="icon-"]:before, [class*=" icon-"]:before': {
    fontFamily: '"fontello"',
    fontStyle: 'normal',
    fontWeight: 'normal',
    speak: 'never',
    display: 'inline-block',
    textDecoration: 'inherit',
    width: '1em',
    marginRight: '.2em',
    textAlign: 'center',
    fontVariant: 'normal',
    textTransform: 'none',
    lineHeight: '1em',
    marginLeft: '.2em',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  '.icon-thumbs-up:before': { content: "'\\e800'" },
  '.icon-thumbs-down:before': { content: "'\\e801'" },
  '.icon-link:before': { content: "'\\e802'" },
  '.icon-jm-logo:before': { content: "'\\e803'" },
  '.icon-down-open:before': { content: "'\\e804'" },
  '.icon-heart:before': { content: "'\\e805'" },
  '.icon-heart-empty:before': { content: "'\\e806'" },
  '.icon-mail:before': { content: "'\\e807'" },
  '.icon-bookmark:before': { content: "'\\e808'" },
  '.icon-bookmark-empty:before': { content: "'\\f097'" },
  '.icon-code:before': { content: "'\\f121'" },
  '.icon-thumbs-up-alt:before': { content: "'\\f164'" },
  '.icon-thumbs-down-alt:before': { content: "'\\f165'" },

  ':root': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    fontSize: '15pt',
  },

  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$primary',
    color: '$light',
    minHeight: '100vh',
  },

  'a': {
    color: 'inherit',
    '&:hover, &:active, &:visited': {
      color: 'inherit',
    },
  },
})