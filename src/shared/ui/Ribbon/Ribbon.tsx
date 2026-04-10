import { styled } from '@/shared/styles/stitches.config'

export const RibbonWrapper = styled('div', {
  position: 'absolute',
  overflow: 'hidden',
  boxSizing: 'border-box',
  top: 0,
  right: 0,
  height: '10em',
  width: '10em',
  zIndex: '$ribbon',
})

export const RibbonLink = styled('a', {
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