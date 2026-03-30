import { styled } from '../styles/stitches.config'

export const HeroBanner = styled('section', {
  position: 'relative',
  width: '$viewportWidth',
  maxWidth: '$viewportMaxWidth',
  height: '$viewportHeight',
  maxHeight: '$viewportHeight',
  centeredFlex: true,
  flexDirection: 'column',
  border: '1px solid $light',
  borderRadius: '$roundness',

  '.brand-image': {
    marginBottom: '1em',
  },

  '.link-list': {
    listStyle: 'none',
    centeredFlex: true,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '15em',

    '& > li': {
      margin: '0.2em 0.5em',
      height: '1.5rem',
    },
  },

  '.link': {
    textDecoration: 'none',
    color: '$light',
    transition: 'font-size 180ms ease-in-out',

    '&:hover': {
      fontSize: '1.1em',
    },
  },
})
