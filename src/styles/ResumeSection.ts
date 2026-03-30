import { styled } from '../styles/stitches.config'

export const ResumeSection = styled('section', {
  scrollbarWidth: 'none',
  scrollbarColor: '$gray2 $primary',
  width: '$viewportWidth',
  maxWidth: '$viewportMaxWidth',
  height: '$viewportHeight',
  maxHeight: '$viewportHeight',
  border: '1px solid $light',
  borderRadius: '$roundness',
  boxShadow: '$card',

  overflowY: 'scroll',
  fontSize: '12pt',
  boxSizing: 'border-box',
  padding: '2em 4em 2em',

  'h1, h2, h3': {
    margin: '0.3em 0',
  },

  '& > .title': {
    marginTop: '1em',
    fontSize: '1.6',
    fontWeight: 500,
  },

  '& > .resume-content': {
    marginTop: '1em',
  },

  '.resume-content': {
    color: '$gray2',

    '& > .title': {
      color: '$light',
      fontWeight: 400,
      fontSize: '1.3em',
    },
  },

  '.content-info': {
    '& > .role': {
      fontWeight: 400,
      fontSize: '0.9em',
      color: '$light',
    },
    '& > .stack': {
      fontWeight: 400,
      fontSize: '0.9em',
      color: '$light',
    },
  },

  '.details-list': {
    paddingLeft: '1.5em',

    '& > .detail': {
      margin: '0.5em 0',
      fontSize: '1em',

      '& > .link': {
        color: '$light',
        '&:active, &:visited': {
          color: '$light',
        },
        '&:hover': {
          color: '$gray2',
        },
      },
    },
  },

  '.back-link': {
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '1em',
    textDecoration: 'none',
    color: '$light',
    fontSize: '1em',
  },

  '@mobile': {
    padding: '0 2em 0',
    width: '100dvw',
    height: '100dvh',
    maxHeight: '100dvh',
    border: 'none',
    fontSize: '14pt',
  },
})
