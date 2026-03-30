import { styled } from '../styles/stitches.config'

export const BrandImage = styled('figcaption', {
  centeredFlex: true,
  flexDirection: 'column',

  '& > .icon': {
    fontSize: '9em',
  },

  '.mail': {
    fontSize: '0.8em',
    color: '#a8a8a8',
  },
})
